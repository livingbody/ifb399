const PersonalCenterBox = () => {
  return (
    <div className='border rounded-md'>
      <div className='group flex items-center space-x-4 px-6 py-2 text-sm hover:bg-gray-100 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-gray-700 group-hover:text-gray-900'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
          />
        </svg>
        <div className='text-sm text-gray-700 group-hover:text-gray-900'>
          My Collection
        </div>
      </div>
      <div className='group flex items-center space-x-4 px-6 py-2 text-sm hover:bg-gray-100 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-gray-700 group-hover:text-gray-900'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
          />
        </svg>
        <div className='text-sm text-gray-700 group-hover:text-gray-900'>
          My Subscription
        </div>
      </div>
      <div className='group flex items-center space-x-4 px-6 py-2 text-sm hover:bg-gray-100 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-gray-700 group-hover:text-gray-900'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />
        </svg>
        <div className='text-sm text-gray-700 group-hover:text-gray-900'>
          My Account
        </div>
      </div>
      <div className='group flex items-center space-x-4 px-6 py-2 text-sm hover:bg-gray-100 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-gray-700 group-hover:text-gray-900'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
          />
        </svg>
        <div className='text-sm text-gray-700 group-hover:text-gray-900'>
          FeedBack
        </div>
      </div>
    </div>
  )
}

export default PersonalCenterBox
