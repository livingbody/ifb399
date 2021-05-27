import React from 'react'
import { classNames } from '../../utils/utils'

const tabs = [
  { title: 'Recommend', link: '/', current: true },
  { title: 'Subscription', link: '/', current: false },
  { title: 'Digest', link: '/', current: false },
]

export default function BaseTab() {
  return (
    <div>
      <div className='sm:hidden'>
        <select
          id='tabs'
          name='tabs'
          className='block w-full focus:ring-indigo-500 focus:border-brand border-gray-300 rounded-md'
          // @ts-ignore
          defaultValue={tabs.find((tab) => tab.current).title}
        >
          {tabs.map((tab) => (
            <option key={tab.title}>{tab.title}</option>
          ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <nav className='flex space-x-4' aria-label='Tabs'>
          {tabs.map((tab) => (
            <a
              key={tab.title}
              href={tab.link}
              className={classNames(
                tab.current
                  ? 'bg-blue-100 text-gray-700'
                  : 'text-gray-500 hover:text-gray-700',
                'px-3 py-2 font-medium text-sm rounded-md'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
