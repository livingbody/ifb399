import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const navigation = [
  { title: 'Recommend', link: '/' },
  { title: 'Subscription', link: '/' },
  { title: 'Digest', link: '/' },
]

export default function ContentHeader() {
  return (
    <>
      <div className='flex items-baseline space-x-1'>
        {navigation.map((item, itemIdx) =>
          itemIdx === 0 ? (
            <Fragment key={item.title}>
              <Link
                key={item.title}
                to={item.link}
                className='text-gray-900 bg-blue-100 px-2 py-1 rounded-md text-md hover:text-gray-600'
              >
                {item.title}
              </Link>
            </Fragment>
          ) : (
            <Link
              key={item.title}
              to={item.link}
              className='text-gray-700 px-3 py-1 rounded-md text-lg hover:bg-blue-50 hover:text-gray-900'
            >
              {item.title}
            </Link>
          )
        )}
      </div>
      <div className='h-px my-3 bg-gray-200' />
    </>
  )
}
