import React from 'react'
import demoImage from '../../static/demo_course_image.png'
import BaseActionBar from '../BaseActionBar/BaseActionBar'
import { useHistory } from 'react-router-dom'

const BaseListItem = () => {
  const history = useHistory()
  return (
    <button
      className='group border rounded-md py-2 px-6 bg-white hover:bg-gray-50'
      onClick={() => {
        history.push('/explore/detail')
      }}
    >
      <div className='flex flex-col space-y-2'>
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

        <div className='flex space-x-6 justify-between'>
          <div className='rounded-md'>
            <img
              className='object-contain h-24 rounded-md'
              src={demoImage}
              alt='#'
            />
          </div>
          <div className='w-full h-24 overflow-y-hidden text-gray-800 overflow-ellipsis text-left'>
            The binary number system plays a central role in how information of
            all kinds is stored on computers. Understanding binary helps to
            unravel the mystery of computers, as students begin to understand
            that binary digits represent on and off. Binary cards can be used to
            introduce the binary number system. Students can see the connection
            between binary digits represented as dots and the corresponding
            decimal number. When cards are placed in sequence students can
            create a binary number displaying cards as on or off. Students
            explain how a standard system of encoding is used to represent
            numbers, text and other special characters.
          </div>
        </div>

        <div className='h-8 flex justify-between'>
          <BaseActionBar />
        </div>
      </div>
    </button>
  )
}

export default BaseListItem
