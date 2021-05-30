import { MailIcon } from '@heroicons/react/solid'

const BaseUserInfoBar = () => {
  const UserInfo = {
    name: 'Ricardo Cooper',
    email: 'ricardo.cooper@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  }
  return (
    <a href={UserInfo.href} className='block hover:bg-gray-50'>
      <div className='flex items-center px-4 sm:px-2'>
        <div className='min-w-0 flex-1 flex items-center'>
          <div className='flex-shrink-0'>
            <img
              className='h-12 w-12 rounded-full'
              src={UserInfo.imageUrl}
              alt=''
            />
          </div>
          <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
            <div>
              <p className='text-sm font-medium text-brand truncate'>
                {UserInfo.name}
              </p>
              <p className='mt-2 flex items-center text-sm text-gray-500'>
                <MailIcon
                  className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                <span className='truncate'>{UserInfo.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
export default BaseUserInfoBar
