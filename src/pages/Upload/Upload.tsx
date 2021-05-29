import React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import BaseLayout from '../../components/layout/BaseLayout'

const mdParser = new MarkdownIt()

const placeholder = `Edit here`

const Upload = () => {
  return (
    <BaseLayout>
      <div className='space-y-2 m-2 '>
        <div className='group h-32 border rounded-md bg-gray-100 flex flex-col items-center justify-center hover:bg-gray-200'>
          <div className='flex flex-col items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-gray-700 group-hover:text-gray-900'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
                clipRule='evenodd'
              />
            </svg>
            <div className='text-gray-900 group-hover:text-gray-900'>
              Top image
            </div>
          </div>
        </div>
        <input
          type='text'
          name='title'
          id='title'
          className='shadow-sm focus:ring-brand focus:border-brand block w-full sm:text-2xl border-gray-300 rounded-md'
          placeholder='Please input your header…'
        />
        <div className='w-full h-120'>
          <MdEditor
            placeholder={placeholder}
            style={{ height: '100%' }}
            renderHTML={(text) => mdParser.render(text)}
          />
        </div>
        <div className='flex space-x-4 flex-wrap'>
          <div className='group w-36 h-24 bg-gray-100 border rounded-md flex flex-col items-center justify-center hover:bg-gray-200'>
            <div className='flex flex-col items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 text-gray-700 group-hover:text-gray-900'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='text-sm text-gray-900 group-hover:text-gray-900 hover:bg-gray-200'>
                Index image
              </div>
            </div>
          </div>
          <div className='group w-36 h-24 bg-gray-100 border rounded-md flex flex-col items-center justify-center hover:bg-gray-200'>
            <div className='flex flex-col items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 text-gray-700 group-hover:text-gray-900'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                />
              </svg>

              <div className='text-sm text-gray-900 group-hover:text-gray-900 hover:bg-gray-200'>
                Index Video
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className='group w-36 h-24 bg-gray-100 border rounded-md flex flex-col items-center justify-center hover:bg-gray-200 '>
              <div className='flex flex-col items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-gray-700 group-hover:text-gray-900'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <div className='text-sm text-gray-900 group-hover:text-gray-900 hover:bg-gray-200'>
                  Attachments
                </div>
              </div>
            </div>
            <div className='text-sm text-gray-700'>0/10</div>
          </div>
          <div className='group w-80  bg-white border rounded-md py-1 px-3 space-y-2'>
            <div className='flex space-x-2'>
              <div>Tags:</div>
              <div className='flex space-x-2'>
                <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800'>
                  Python
                </span>
                <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800'>
                  Grade 7
                </span>
              </div>
            </div>
            <div className='flex space-x-2'>
              <div>Hot Tags:</div>
              <div className='flex space-x-2'>
                <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800'>
                  Arduino
                </span>
                <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800'>
                  Raspberry Pi
                </span>
              </div>
            </div>
            <div className='flex space-x-2'>
              <div>Add tags:</div>
              <div>
                <input
                  type='text'
                  name='tag'
                  id='tag'
                  className='shadow-sm focus:ring-brand focus:border-brand block w-full sm:text-xs border-gray-300 rounded-md'
                  placeholder='new tag'
                />
              </div>
            </div>
          </div>
          <button className='h-full self-center inline-flex items-center px-2 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            Upload
          </button>
        </div>
      </div>
    </BaseLayout>
  )
}
export default Upload
