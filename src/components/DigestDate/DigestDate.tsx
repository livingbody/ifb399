import * as React from 'react'

const DigestDate = ({ date }: { date: string }) => {
  return (
    <div className='px-4'>
      <div className='text-xl'>{date}</div>
    </div>
  )
}
export default DigestDate
