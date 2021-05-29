import { AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import pythonLogo from '../../static/python.png'
import javaLogo from '../../static/java.png'
import jsLogo from '../../static/js.png'

const Tags = [
  {
    id: 1,
    name: 'Python',
    description:
      'Python is powerful and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open.',
    role: 'Top1',
    imageUrl: pythonLogo,
  },
  {
    id: 2,
    name: 'Java',
    description:
      'Java is powering the innovation behind our digital world. Harness this potential with Java resources for student coders, hobbyists, developers, and IT leaders.',
    role: 'Top2',
    imageUrl: javaLogo,
  },
  {
    id: 3,
    name: 'JavaScript',
    description:
      'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
    role: 'Top3',
    imageUrl: jsLogo,
  },
]
const SubscriptionSection = () => {
  return (
    <div className='px-2 pb-6'>
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {Tags.map((tag) => (
          <li
            key={tag.id}
            className='col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'
          >
            <div className='w-full flex items-center justify-between p-4 space-x-2'>
              <div className='flex-1'>
                <div className='flex items-center space-x-3'>
                  <h3 className='text-gray-900 text-sm font-medium truncate'>
                    {tag.name}
                  </h3>
                  <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                    {tag.role}
                  </span>
                </div>
                <p className='h-24 overflow-ellipsis overflow-hidden mt-1 text-gray-500 text-sm '>
                  {tag.description}
                </p>
              </div>
              <img
                className='w-20 h-20 bg-gray-300 rounded-full flex-shrink-0 object-center'
                src={tag.imageUrl}
                alt=''
              />
            </div>
            <div>
              <div className='-mt-px flex divide-x divide-gray-200'>
                <div className='w-0 flex-1 flex'>
                  <a
                    href='#'
                    className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                  >
                    <AcademicCapIcon
                      className='w-5 h-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>Explore</span>
                  </a>
                </div>
                <div className='-ml-px w-0 flex-1 flex'>
                  <a
                    href='#'
                    className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
                  >
                    <CheckCircleIcon
                      className='w-5 h-5 text-brand'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>Subscribed</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SubscriptionSection
