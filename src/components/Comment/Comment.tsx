import React from 'react'
import aviator from '../../static/aviator/aviator.jpeg'

import aviator1 from '../../static/aviator/aviator1.jpeg'
import aviator2 from '../../static/aviator/aviator2.jpeg'

const UserInfo = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  imageUrl: aviator,
  href: '#',
}
const Comment = () => {
  return (
    <div className='space-y-2'>
      <div className='text-xl font-bold'>Comments:</div>
      <div className='flex items-center space-x-3 space-y-3'>
        <img
          className='h-10 w-10 rounded-full'
          src={UserInfo.imageUrl}
          alt=''
        />
        <input
          type='text'
          name='title'
          id='title'
          className='shadow-sm text-sm focus:ring-brand focus:ring-brand w-full sm: border-gray-300 rounded-3xl '
          placeholder='Write a comment...'
        />
        <button
          type='button'
          className='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand'
        >
          Comment
        </button>
      </div>
      <div className='flex items-start my-3 space-x-3'>
        <img className='h-10 w-10 rounded-full' src={aviator1} alt='' />
        <div className='bg-gray-100 rounded-lg w-full space-y-1 py-2 px-3'>
          <div className='text-gray-600'>Tom Hanks</div>
          <div className='text-gray-800'>Please send me back!</div>
        </div>
      </div>
      <div className='flex items-start my-3 space-x-3'>
        <img className='h-10 w-10 rounded-full' src={aviator2} alt='' />
        <div className='bg-gray-100 rounded-lg w-full space-y-1 py-2 px-3'>
          <div className='text-gray-600'>Jones</div>
          <div className='text-gray-800'>
            This is Jone, I'm interesting about your plan, please send me back
            asap!
          </div>
        </div>
      </div>
    </div>
  )
}
export default Comment
