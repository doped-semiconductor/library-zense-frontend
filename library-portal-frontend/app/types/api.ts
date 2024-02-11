import { AxiosResponse } from 'axios'

interface BasicResponse extends Response {}

export interface GetUserResponse extends BasicResponse {
  loggedIn: boolean
  user: {
    email: string
  }
}

export interface LoginResponse extends BasicResponse {
  error: string
  message: string
}

export interface SignUpResponse extends BasicResponse {
  error: string
  message: string
}

export interface LogoutResponse extends BasicResponse {
  message: string
}

export interface GetNavInfoResponse extends BasicResponse {
  message: string
  error: string | null
  payload: NavInfo[] | null
}

export enum SectionType {
  External = 'external',
  ParentSection = 'parentsection',
  Page = 'page',
}

export interface Section {
  _id: string
  id: string
  section_name: string
  parent_section: string | null
  created_by: string
  created_at: string
  modified_at: string
  section_type: SectionType
  htmlContent: string | null
  external_url: string | null
  description: string
  visibility: boolean
}

export interface NavInfo {
  id: string
  label: string
  key: string
  url_segment: string
  type: SectionType
  ext_url: string | null
  children: NavInfo[] | null
}

export interface StandardResponse extends AxiosResponse {
  message: string | null
  error: string | null
  payload: any | null
}

export type RegisterResponse = SignUpResponse

export interface BasicRequestBody {}

export interface CreatePageRequestBody extends BasicRequestBody {
  sectionName: string | null | undefined
  section_type: SectionType | null | undefined
  ext_url: string | null | undefined
  htmlContent: string | null | undefined
  description: string
  parentSectionID: string | null | undefined
  visibility: boolean | null | undefined
}
export interface StandardRequestBody extends BasicRequestBody {
  message: string | null | undefined
  error: string | null | undefined
  payload: any | null | undefined
}

export interface mediaRow {
  icon: string | null
  id: string | null | undefined
  filename: string | null | undefined
  source_url: string | null | undefined
  size: number | null | undefined
  type: string | null | undefined
  createdby: string | null | undefined
  description: string | null | undefined
  modifiedon: string | null | undefined
}

export interface SectionRecord {
  icon: SectionType
  id: string
  section_name: string
  external_url: string | null
  sectiontype: SectionType
  createdby: string | null
  description: string | null
  modifiedon: string
}
