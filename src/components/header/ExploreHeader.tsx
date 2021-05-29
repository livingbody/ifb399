import BaseTab from '../navigations/BaseTab'
import SimpleDropdown from '../dropDowns/SimpleDropdown'
import React from 'react'

const technology = [
  { id: 1, name: 'All Technologies' },
  { id: 2, name: 'Raspberry Pi' },
  { id: 3, name: 'Python' },
  { id: 4, name: 'Arduino' },
]
const grade = [
  { id: 1, name: 'All Grades' },
  { id: 2, name: 'Grade 7' },
  { id: 3, name: 'Grade 8' },
  { id: 4, name: 'Grade 9' },
]

const ExploreHeader = () => {
  return (
    <div className='p-3 bg-white'>
      <div className='flex justify-between items-center'>
        <BaseTab currentTab='Explore' />
        <div className='flex space-x-4'>
          <SimpleDropdown itemsList={technology} />
          <SimpleDropdown itemsList={grade} />
        </div>
      </div>
    </div>
  )
}
export default ExploreHeader
