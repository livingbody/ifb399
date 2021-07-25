import React from 'react'

const SectionTitle = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className='border rounded-md bg-white mx-2 p-6 flex flex-col items-center space-y-3'>
      <div className='text-3xl font-bold'>{title}</div>
      <div>{description} </div>
    </div>
  )
}
export default SectionTitle
