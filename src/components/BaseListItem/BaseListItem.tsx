import * as React from 'react'
import demoImage from '../../static/demo_course_image.png'
import BaseActionBar from '../BaseActionBar/BaseActionBar'
import { useHistory } from 'react-router-dom'

const BaseListItem = () => {
  const history = useHistory()
  return (
    <div
      className='group border rounded-md bg-white hover:bg-gray-50 py-1 px-2 md:py-2 md:px-6'
      onClick={() => {
        history.push('/explore/detail')
      }}
    >
      <div className='flex flex-col md:space-y-1'>
        <div className='flex justify-between'>
          <div className='text-md md:text-xl font-bold text-gray-800'>
            Here is the heading
          </div>
          <div className='space-x-2 hidden sm:flex'>
            <div className='flex items-center px-2 rounded-md text-xs font-medium bg-blue-100 text-gray-700'>
              Python
            </div>
            <div className='flex items-center px-2 rounded-md text-xs font-medium bg-pink-100 text-gray-700'>
              7 Grade
            </div>
          </div>
        </div>

        <div className='flex justify-between space-x-2 items-center md:space-x-4'>
          <img
            className='object-contain h-20 w-24 md:w-32 rounded-sm'
            src={demoImage}
            alt='#'
          />
          <div className='w-full h-16 md:h-24 text-gray-800 text-left leading-4 text-sm md:text-base most-line-4'>
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

        <div className='h-4 md:h-8 flex justify-between'>
          <BaseActionBar />
        </div>
      </div>
    </div>
  )
}

export default BaseListItem
