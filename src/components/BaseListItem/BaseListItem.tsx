import React from 'react'
import demoImage from '../../static/image1.png'

const BaseListItem = () => {
  return (
    <div className='border rounded-md py-2 px-6 flex flex-col bg-white'>
      <div className='flex justify-between'>
        <div className='text-lg font-bold h-8'>Here is the heading</div>
        <div className='flex text-xs'>Python</div>
      </div>

      <div className='flex  justify-between'>
        <div className='w-2/12'>
          <img className='h-24 w-36 rounded-sm' src={demoImage} alt='#' />
        </div>
        <div className='w-8/12 h-24 overflow-y-hidden'>
          Here is short description. The shape of the "cloud" to draw. Can be
          any polar equation represented as a callback function, or a keyword
          present. Available presents are circle (default).The shape of the
          "cloud" to draw. Can be any polar equation represented as a callback
          function, or a keyword present. Available presents are circle
          (default).
        </div>
        <div className='flex h-24 w-1/12 items-center justify-center '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 text-gray-700'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
            />
          </svg>
        </div>
      </div>
      <div className='pt-2 h-8 flex justify-between'>
        <div className='w-2/12' />
        <div className='w-8/12 flex space-x-6'>
          <div className='flex space-x-1 text-sm text-gray-700 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-600'
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
            <div>12 comments</div>
          </div>
          <div className='flex space-x-1 text-sm text-gray-700 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-600'
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
            <div>4 like</div>
          </div>
          <div className='flex space-x-1 text-sm text-gray-700 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
              />
            </svg>
            <div>share</div>
          </div>
        </div>
        <div className='w-1/12' />
      </div>
    </div>
  )
}

export default BaseListItem
