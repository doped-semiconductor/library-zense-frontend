'use client'
import Image from 'next/image'
import { Editor } from '@tinymce/tinymce-react'
import { useEffect, useState } from 'react'
import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios'

import './styles.css'
import { Button } from '@nextui-org/react'
import {
  CreatePageRequestBody,
  SectionType,
  StandardResponse,
} from '@/app/types/api'

export default function AdminCreatepagePage() {
  // stores state (content) of the Editor
  // text ==> content as ascii text only
  // value ==> content as html (with inline css). (for rich text documents) ** important
  const [parentSectionsList, setParentSectionsList] = useState(['1', '2', '3'])
  const [text, setText] = useState('')
  const [value, setValue] = useState('<h1> Start writing here ... </h1>')
  const [sectionName, setSectionName] = useState('')
  const [externalURL, setExternalURL] = useState('')
  const [sectionType, setSectionType] = useState(SectionType.Page)
  const [parentSection, setParentSection] = useState('')
  const [description, setDescription] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [ifFormError, setIfFormError] = useState(false)

  const formValidation = () => {
    let isSectionNameValid: boolean =
      sectionName !== '' && sectionName.length > 3
    let isExternalURL: boolean = externalURL !== ''
    let isSectionTypeValid: boolean =
      sectionType === SectionType.External ||
      sectionType === SectionType.Page ||
      sectionType === SectionType.ParentSection
    let isParentSectionValid: boolean =
      parentSectionsList.includes(parentSection)
    let isVisibility = typeof visibility === 'boolean'

    if (sectionType === SectionType.ParentSection) {
      setIfFormError(
        !(isSectionNameValid && isSectionTypeValid && isVisibility)
      )
    } else if (sectionType === SectionType.External) {
      setIfFormError(
        !(
          isSectionNameValid &&
          isSectionTypeValid &&
          isExternalURL &&
          isParentSectionValid &&
          isVisibility
        )
      )
    } else if (sectionType === SectionType.Page) {
      setIfFormError(
        !(
          isSectionNameValid &&
          isSectionTypeValid &&
          isParentSectionValid &&
          isVisibility
        )
      )
    }
  }

  const onPublish = async () => {
    //formValidation()

    const data: CreatePageRequestBody = {
      sectionName: sectionName,
      section_type: sectionType,
      description: description,
      ext_url: null,
      htmlContent: null,
      parentSectionID: null,
      visibility: visibility,
    }

    if (SectionType.External === sectionType) {
      data['ext_url'] = externalURL
      data['htmlContent'] = null
      data['parentSectionID'] = parentSection
    } else if (SectionType.Page === sectionType) {
      data['ext_url'] = null
      data['htmlContent'] = value
      data['parentSectionID'] = parentSection
    } else if (SectionType.ParentSection === sectionType) {
      data['ext_url'] = null
      data['htmlContent'] = null
      data['parentSectionID'] = null
    }

    console.log('data:', data)
    const config: AxiosRequestConfig = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    try {
      // let response: Response = await fetch(
      //   'http://localhost:5000/api/content/new-section/',
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data),
      //     credentials: 'include', // Include credentials (cookies) in the request
      //   }
      // )

      let result: AxiosResponse = await axios.post(
        'http://localhost:5000/api/content/new-section/',
        data,
        {
          withCredentials: true,
        }
      )

      if (result.status === 200) {
        let response: StandardResponse = result.data
        window.alert(
          `page created succesfully. Section Name ${response.payload}`
        )
      }
    } catch (error) {
      window.alert('Something went wrong. Try again.')
    }
  }

  let sectionsList = [
    {
      name: 'section 1',
      sectionid: '1',
    },
    {
      name: 'section 2',
      sectionid: '2',
    },
    {
      name: 'section 3',
      sectionid: '3',
    },
    {
      name: 'none',
      sectionid: 'null',
    },
  ]

  const onSave = async (e: any) => {
    e.preventDefault()

    let body = {
      data: JSON.stringify({
        htmlContent: value,
        textOnlyContent: text,
      }),
    }

    axios.post('http://localhost:3008/post/newpage', body).then((response) => {
      // for now just logging the message when response is recieved.
      // Later code should be modified to take necessary actions and notify user.
      console.log(response.data)
    })
  }

  const uploadFile = (blobInfo: any) => {
    const formData = new FormData()
    formData.append('image', blobInfo.blob())

    let response = fetch('http://localhost:3008/upload/images', {
      method: 'POST',
      body: formData,
    })

    return response
  }

  return (
    <div className='bg-transparent w-full h-full'>
      <div
        id='actions-div'
        className='min-h-[35px] w-[95%] mx-auto px-5 py-3 my-3 rounded-lg bg-white flex justify-stretch items-center'
      >
        {/* <button className='btn max-w-fit bg-blue-600 text-white px-3 py-2 rounded-md hover:scale-95 transition-all hover:bg-blue-700'>
          Save
        </button> */}
        <div className='inline-block w-fit p-1 bg-white mx-auto my-0 text-3xl font-semibold'>
          Create a new HTML Page for displaying new-content
        </div>
      </div>

      <div id='main-div' className='w-full p-2 h-fit'>
        <div className='min-w-full min-h-full w-full container'>
          <div
            className={
              sectionType !== SectionType.Page
                ? 'min-h-screen h-full max-h-full min-w-full hover:cursor-not-allowed opacity-70'
                : 'min-h-screen h-full max-h-full min-w-full'
            }
          >
            <Editor
              apiKey='8qaolh6gudre3h70mzloumvlk6maazqyfko3xhrgw64petzg'
              onEditorChange={(newValue, editor) => {
                setValue(newValue)
                setText(editor.getContent({ format: 'text' }))
                // console.log('VALUE ==> ', value)
                // console.log('TEXT ==> ', text)
              }}
              disabled={sectionType !== SectionType.Page}
              onInit={(evt, editor) => {
                setText(editor.getContent({ format: 'text' }))
              }}
              initialValue='<h1> Start writing here ... </h1>'
              value={value}
              init={{
                // handles image upload.
                images_upload_handler: async (blobInfo) => {
                  return new Promise((resolve, reject) => {
                    uploadFile(blobInfo)
                      .then(async (data) => {
                        console.log('data', data)
                        let url = ''
                        try {
                          let body = await data.json()
                          url = body.url
                        } catch (err) {
                          console.log(err)
                        }
                        resolve(url)
                      })
                      .catch((e) => {
                        reject(e)
                      })
                  })
                },
                width: '100%',
                height: '100%',
                min_height: window.innerHeight * 1,
                max_height: window.innerHeight * 1,
                resize: false,
                plugins:
                  'anchor autolink autoresize autosave charmap code codesample directionality emoticons fullscreen help image importcss insertdatetime link linkchecker lists media nonbreaking pagebreak preview quickbars save searchreplace table template visualblocks visualchars wordcount',
                menu: {
                  file: {
                    title: 'File',
                    items:
                      'newdocument restoredraft | preview | export print | deleteallconversations',
                  },
                  edit: {
                    title: 'Edit',
                    items:
                      'undo redo | cut copy paste pastetext | selectall | searchreplace',
                  },
                  view: {
                    title: 'View',
                    items:
                      'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen',
                  },
                  insert: {
                    title: 'Insert',
                    items:
                      'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime',
                  },
                  format: {
                    title: 'Format',
                    items:
                      'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat',
                  },
                  tools: {
                    title: 'Tools',
                    items:
                      'spellchecker spellcheckerlanguage | a11ycheck code wordcount',
                  },
                  table: {
                    title: 'Table',
                    items:
                      'inserttable | cell row column | advtablesort | tableprops deletetable',
                  },
                  help: { title: 'Help', items: 'help' },
                },
                toolbar:
                  'aligncenter alignjustify alignleft alignnone alignright| anchor | blockquote blocks | backcolor | bold | copy | cut | fontfamily fontsize forecolor h1 h2 h3 h4 h5 h6 hr indent | italic | language | lineheight | newdocument | outdent | paste pastetext | print | redo | remove removeformat | selectall | strikethrough | styles | subscript superscript underline | undo | visualaid | a11ycheck advtablerownumbering typopgraphy anchor restoredraft casechange charmap checklist code codesample addcomment showcomments ltr rtl editimage fliph flipv imageoptions rotateleft rotateright emoticons export footnotes footnotesupdate formatpainter fullscreen help image insertdatetime link openlink unlink bullist numlist media mergetags mergetags_list nonbreaking pagebreak pageembed permanentpen preview quickimage quicklink quicktable cancel save searchreplace spellcheckdialog spellchecker | table tablecellprops tablecopyrow tablecutrow tabledelete tabledeletecol tabledeleterow tableinsertdialog tableinsertcolafter tableinsertcolbefore tableinsertrowafter tableinsertrowbefore tablemergecells tablepasterowafter tablepasterowbefore tableprops tablerowprops tablesplitcells tableclass tablecellclass tablecellvalign tablecellborderwidth tablecellborderstyle tablecaption tablecellbackgroundcolor tablecellbordercolor tablerowheader tablecolheader | tableofcontents tableofcontentsupdate | template typography | insertfile | visualblocks visualchars | wordcount',
                skin: window.matchMedia('(prefers-color-scheme: dark)').matches
                  ? 'oxide-dark'
                  : 'oxide',
              }}
            />
          </div>
        </div>

        <div className='min-h-screen px-1 py-4 h-fit border-1 border-gray-300 rounded-lg bg-white max-h-fit'>
          <div className='w-full h-fit border-b-1 pt-2 border-gray-200 pb-5'>
            <Button
              className='text-white text-base bg-blue-600 m-auto w-fit block'
              onClick={(e) => {
                onPublish()
              }}
            >
              Publish page
            </Button>
          </div>

          {ifFormError && (
            <span className='text-danger-500 text-xs font-sans p-0 m-0 block w-fit mx-auto pt-3'>
              *all the enabled fields must be filled.
            </span>
          )}

          <div className='w-full h-fit border-b-1 pt-2 border-gray-200 pb-5'>
            <span className='w-full block px-2 pb-2'>
              <label
                htmlFor='Section name'
                className='block pl-2 pb-1 font-semibold'
              >
                section name:
              </label>

              <input
                className='block ml-3 px-2 py-[0.15rem] border-2 text-base border-gray-400  rounded'
                type='text'
                placeholder='name'
                value={sectionName}
                onChange={(e) => {
                  setSectionName(e.target.value)
                }}
              />
            </span>

            <span className='w-full block px-2 pb-2'>
              <label htmlFor='type' className='block pl-2 pb-1 font-semibold'>
                type:
              </label>

              <select
                id='type'
                className='block ml-3 px-2 py-[0.15rem] border-2 text-base border-gray-400  rounded'
                value={sectionType}
                placeholder='external'
                onChange={(e) => {
                  switch (e.target.value) {
                    case 'external': {
                      setSectionType(SectionType.External)
                      break
                    }
                    case 'page': {
                      setSectionType(SectionType.Page)
                      break
                    }
                    case 'parentsection': {
                      setSectionType(SectionType.ParentSection)
                      break
                    }
                  }
                }}
              >
                <option value={'external'}> External Link </option>
                <option value={'page'}> HTML Page </option>
                <option value={'parentsection'}> Parent Section </option>
              </select>
            </span>

            <span className='w-full block px-2 pb-2'>
              <label
                htmlFor='external-url'
                className='block pl-2  pb-1 font-semibold'
              >
                external-url:
              </label>

              <input
                id='external-url'
                type='text'
                placeholder='url'
                disabled={!sectionType || sectionType !== SectionType.External}
                value={externalURL}
                onChange={(e) => {
                  setExternalURL(e.target.value)
                }}
                className='block ml-3 px-2 py-[0.15rem] border-2 text-base border-gray-400 rounded disabled:opacity-60 disabled:border-gray-200 disabled:cursor-not-allowed'
              />
            </span>

            <span className='w-full block px-2 pb-2'>
              <label
                htmlFor='parent-section-id'
                className='block pl-2  pb-1 font-semibold'
              >
                parent-section Id:
              </label>

              <select
                id='parent-section-id'
                disabled={
                  !sectionType || sectionType === SectionType.ParentSection
                }
                className='block ml-3 px-2 py-[0.15rem] border-2 text-base border-gray-400 rounded disabled:opacity-60 disabled:border-gray-200 disabled:cursor-not-allowed'
                placeholder='null'
                value={parentSection}
                onChange={(e) => {
                  let id!: string
                  for (let section of sectionsList) {
                    if (section.name === e.target.value) {
                      id = section.sectionid
                    }
                  }

                  setParentSection(id)
                }}
              >
                {sectionsList.map((section, index) => {
                  return (
                    <option value={section.sectionid}> {section.name} </option>
                  )
                })}
              </select>
            </span>

            <span className='w-full block px-1 pb-2'>
              <label
                htmlFor='description'
                className='block pl-2  pb-1 font-semibold'
              >
                Description:
              </label>

              <textarea
                id='description'
                placeholder='page description'
                rows={5}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                className='block ml-3 px-2 py-[0.15rem] border-2 text-base border-gray-400 rounded disabled:opacity-60 disabled:border-gray-200 disabled:cursor-not-allowed w-11/12'
              ></textarea>
            </span>

            <span className='w-full block px-2 pb-2'>
              <label
                htmlFor='visibility'
                className='block pl-2  pb-1 font-semibold'
              >
                visibility:
              </label>

              <select
                id='visibility'
                className='block ml-3 px-2 py-[0.15rem] border-2 text-base border-gray-400  rounded'
                value={visibility ? 'true' : 'false'}
                onChange={(e) => {
                  if (e.target.value === 'true') {
                    setVisibility(true)
                  } else if (e.target.value === 'false') {
                    setVisibility(false)
                  }
                }}
              >
                <option value={'true'}> visible </option>
                <option value={'false'}> hidden </option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
