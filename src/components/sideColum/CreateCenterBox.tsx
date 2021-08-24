import * as React from 'react'
import { Link } from 'react-router-dom'

const CreateCenterBox = () => {
  return (
    <div className='bg-white'>
      <div className='grid grid-cols-3 gap-x-1 border rounded-md p-3'>
        <Link to='/me' className='group flex flex-col items-center space-y-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 text-gray-700 group-hover:text-gray-900'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
            />
          </svg>
          <div className='text-sm text-gray-700 group-hover:text-gray-900'>
            Me
          </div>
        </Link>
        <Link
          to='/upload'
          className='group flex flex-col items-center space-y-1'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 text-gray-700 group-hover:text-gray-900'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
            />
          </svg>
          <div className='text-sm text-gray-700 group-hover:text-gray-900'>
            Write
          </div>
        </Link>

        <Link
          to='/draft'
          className='group flex flex-col items-center space-y-1'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 text-gray-700 group-hover:text-gray-900'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
            />
          </svg>
          <div className='text-sm text-gray-700 group-hover:text-gray-900'>
            Draft
          </div>
        </Link>
      </div>
    </div>
  )
}
export default CreateCenterBox
