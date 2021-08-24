import BaseTab from '../navigations/BaseTab'
import SimpleDropdown from '../dropDowns/SimpleDropdown'
import * as React from 'react'

const technology = [
  { id: 1, name: 'Techs' },
  { id: 2, name: 'Pi' },
  { id: 3, name: 'Python' },
  { id: 4, name: 'Arduino' },
]
const grade = [
  { id: 1, name: 'Grades' },
  { id: 2, name: 'Grade 7' },
  { id: 3, name: 'Grade 8' },
  { id: 4, name: 'Grade 9' },
]

const ExploreHeader = () => {
  return (
    <div className='p-2 bg-white mb-2'>
      <div className='flex justify-between items-center space-x-1'>
        <BaseTab currentTab='Explore' />
        <div className='flex space-x-1 items-center'>
          <SimpleDropdown itemsList={technology} />
          <SimpleDropdown itemsList={grade} />
        </div>
      </div>
    </div>
  )
}
export default ExploreHeader
