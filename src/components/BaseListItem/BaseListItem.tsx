import React from 'react'
import demoImage from '../../static/demo_course_image.png'
import BaseActionBar from '../BaseActionBar/BaseActionBar'

const BaseListItem = () => {
  return (
    <div className='border rounded-md py-2 px-6 flex flex-col bg-white'>
      <div className='flex justify-between'>
        <div className='text-lg font-bold h-8 text-gray-800'>
          Here is the heading
        </div>
        <div className='flex space-x-2'>
          <div className='flex items-center px-2 rounded-md text-xs font-medium bg-blue-100 text-gray-700'>
            Python
          </div>
          <div className='flex items-center px-2 rounded-md text-xs font-medium bg-pink-100 text-gray-700'>
            7 Grade
          </div>
        </div>
      </div>

      <div className='flex  justify-between'>
        <div className='w-2/12'>
          <img className='h-24 w-36 rounded-sm' src={demoImage} alt='#' />
        </div>
        <div className='w-8/12 h-24 overflow-y-hidden text-gray-800 overflow-ellipsis'>
          The binary number system plays a central role in how information of
          all kinds is stored on computers. Understanding binary helps to
          unravel the mystery of computers, as students begin to understand that
          binary digits represent on and off. Binary cards can be used to
          introduce the binary number system. Students can see the connection
          between binary digits represented as dots and the corresponding
          decimal number. When cards are placed in sequence students can create
          a binary number displaying cards as on or off. Students explain how a
          standard system of encoding is used to represent numbers, text and
          other special characters.
        </div>
        <div className='flex flex-col h-24 w-1/12 items-center justify-center'>
          <div>
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
                d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
          </div>
          <div className='flex items-center space-x-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 text-gray-700'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
            <div className='text-sm text-gray-700'>1</div>
          </div>
        </div>
      </div>
      <div className='pt-2 h-8 flex justify-between'>
        <div className='w-2/12' />
        <BaseActionBar />
        <div className='w-1/12' />
      </div>
    </div>
  )
}

export default BaseListItem
