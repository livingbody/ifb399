import React from 'react'
import BaseTab from '../navigations/BaseTab'

const SubscriptionHeader = () => {
  return (
    <div className='p-3 bg-white'>
      <div className='flex justify-between items-center'>
        <BaseTab currentTab='Subscription' />
      </div>
    </div>
  )
}
export default SubscriptionHeader
