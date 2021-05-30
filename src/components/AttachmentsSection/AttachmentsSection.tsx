import React from 'react'
import doc from '../../static/fileType/doc.png'
import pdf from '../../static/fileType/pdf.png'
import excel from '../../static/fileType/excel.png'
import ppt from '../../static/fileType/ppt.png'
import zip from '../../static/fileType/zip.png'
import md from '../../static/fileType/md.png'

const AttachmentsSection = () => {
  return (
    <div className='w-full space-y-3'>
      <div className='flex space-x-4 items-center'>
        <div className='text-xl font-bold'>Attachments:</div>
        <div>
          <a className='underline text-blue-500' href='#'>
            Download all
          </a>
        </div>
      </div>
      <div className='grid grid-cols-6 gap-x-2 p-1 w-2/3'>
        <div className='space-y-2 flex flex flex-col items-center justify-center'>
          <img src={zip} alt='' />
          <button className='text-xs underline text-blue-500'>
            pictures.zip
          </button>
        </div>
        <div className='space-y-2 flex flex flex-col items-center justify-center'>
          <img src={doc} alt='' />
          <button className='text-xs underline text-blue-500'>part1.doc</button>
        </div>
        <div className='space-y-2 flex flex flex-col items-center justify-center'>
          <img src={pdf} alt='' />
          <button className='text-xs underline text-blue-500'>part1.pdf</button>
        </div>
        <div className='space-y-2 flex flex flex-col items-center justify-center'>
          <img src={excel} alt='' />
          <button className='text-xs underline text-blue-500'>all.xlsx</button>
        </div>
        <div className='space-y-2 flex flex flex-col items-center justify-center'>
          <img src={ppt} alt='' />
          <button className='text-xs underline text-blue-500'>part1.pdf</button>
        </div>
        <div className='space-y-2 flex flex flex-col items-center justify-center'>
          <img src={md} alt='' />
          <button className='text-xs underline text-blue-500'>part1.md</button>
        </div>
      </div>
    </div>
  )
}
export default AttachmentsSection
