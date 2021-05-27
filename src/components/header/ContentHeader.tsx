import BaseTab from '../navigations/BaseTab'
import SimpleDropdown from '../dropDowns/SimpleDropdown'
import React from 'react'

const technology = [
  { id: 1, name: 'Raspberry Pi' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'Arduino' },
]
const grade = [
  { id: 1, name: 'Grade 7' },
  { id: 2, name: 'Grade 8' },
  { id: 3, name: 'Grade 9' },
]

const ContentHeader = () => {
  return (
    <div className='flex justify-between'>
      <BaseTab />
      <div className='flex space-x-4'>
        <SimpleDropdown itemsList={technology} />
        <SimpleDropdown itemsList={grade} />
      </div>
    </div>
  )
}
export default ContentHeader
