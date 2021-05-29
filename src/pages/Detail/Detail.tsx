import React from 'react'
import ReactMarkdown from 'react-markdown'
import BaseActionBar from '../../components/BaseActionBar/BaseActionBar'
import BaseLayout from '../../components/layout/BaseLayout'

const Detail = () => {
  const title = 'UNIT BINARY NUMBERS'
  const body =
    'The binary number system plays a central role in how information of all kinds is stored on computers. ' +
    'Understanding binary helps to unravel the mystery of computers, as students begin to understand that ' +
    'binary digits represent on and off. Binary cards can be used to introduce the binary number system. Students' +
    ' can see the connection between binary digits represented as dots and the corresponding decimal number. When ' +
    'cards are placed in sequence students can create a binary number displaying cards as on or off. Students explain ' +
    'how a standard system of encoding is used to represent numbers, text and other special characters. '
  return (
    <BaseLayout>
      <div className='bg-white p-6 space-y-4'>
        <div className='text-2xl font-bold'>{title}</div>
        <BaseActionBar />
        <div className='flex justify-between'>
          <div className='w-9/12'>
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
          <div className='w-2/12 flex flex-col items-center justify-center '>
            download
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Detail
