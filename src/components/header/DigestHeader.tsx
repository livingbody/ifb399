import React from 'react'
import BaseTab from '../navigations/BaseTab'

const ExploreHeader = () => {
  return (
    <div className='p-3 bg-white'>
      <div className='flex justify-between items-center'>
        <BaseTab currentTab='Digest' />
      </div>
    </div>
  )
}
export default ExploreHeader
