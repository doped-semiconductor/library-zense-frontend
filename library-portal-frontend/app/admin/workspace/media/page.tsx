import TableItem from '@/app/components/table/page'
import './styles.css'

export default function AdminMediaPage() {
  return (
    <div className='bg-transparent w-full h-full'>
      <h1 className='hero-title w-fit pl-11 pt-5 text-4xl font-bold drop-shadow-md font-sans'>
        {' '}
        Media Page{' '}
      </h1>
      <p className='pl-12 m-0 mt-2 mb-10'>
        {' '}
        Edit metadata of existing media files, add new media, and delete
        selected media here.{' '}
      </p>

      <div className='w-[90%] p-2 tablediv'>
        <TableItem></TableItem>
      </div>
    </div>
  )
}
