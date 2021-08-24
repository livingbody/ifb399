import * as React from 'react'
import { classNames } from '../../utils/utils'

const tabs_ = [
  { description: 'Explore', link: '/', current: false },
  {
    description: 'Subscription',
    link: '/explore/subscription',
    current: false,
  },
  { description: 'Digest', link: '/explore/digest', current: false },
]

export default function BaseTab({ currentTab }: { currentTab: string }) {
  let tabs = tabs_.map((item) => {
    item.current = item.description === currentTab
    return item
  })
  return (
    <div>
      <div className='sm:hidden'>
        <select
          id='tabs'
          name='tabs'
          className='block w-full focus:ring-indigo-500 focus:border-brand border-gray-300 rounded-md'
          // @ts-ignore
          defaultValue={tabs.find((tab) => tab.current).description}
        >
          {tabs.map((tab) => (
            <option key={tab.description}>{tab.description}</option>
          ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <nav className='flex space-x-4' aria-label='Tabs'>
          {tabs.map((tab) => (
            <a
              key={tab.description}
              href={tab.link}
              className={classNames(
                tab.current
                  ? 'bg-blue-100 text-gray-700'
                  : 'text-gray-500 hover:text-gray-700',
                'px-3 py-2 font-medium text-sm rounded-md'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.description}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
