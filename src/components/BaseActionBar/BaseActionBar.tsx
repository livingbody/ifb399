import * as React from 'react'

const BaseActionBar = () => {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex space-x-2 md:space-x-4'>
        <div className='flex space-x-1 text-sm text-gray-500 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='md:h-6 md:w-6 h-4 w-4 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
            />
          </svg>
          <div className='sm:text-sm'>99</div>
          <div className='hidden md:inline'>reads</div>
        </div>
        <div className='flex space-x-1 text-sm text-gray-500 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='md:h-6 md:w-6 h-4 w-4 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <div>9</div>
          <div className='hidden md:inline'>minutes ago</div>
        </div>
        <div className='flex space-x-1 text-sm text-gray-500 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='md:h-6 md:w-6 h-4 w-4 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
            />
          </svg>
          <div>12</div>
          <div className='hidden md:inline'>comments</div>
        </div>

        <div className='flex space-x-1 text-sm text-gray-500 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='md:h-6 md:w-6 h-4 w-4 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
            />
          </svg>
          <div>12</div>
          <div className='hidden md:inline'>downloads</div>
        </div>
      </div>

      <div className='flex space-x-1 text-sm text-gray-500 items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='md:h-6 md:w-6 h-4 w-4 text-gray-500'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
          />
        </svg>
        <div>4</div>
        <div className='hidden md:inline'>like</div>
      </div>
    </div>
  )
}
export default BaseActionBar
