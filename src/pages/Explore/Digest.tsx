import React from 'react'
import BaseLayout from '../../components/layout/BaseLayout'
import BaseListItem from '../../components/BaseListItem/BaseListItem'
import SectionTitle from '../../components/header/SectionTitle'
import DigestHeader from '../../components/header/DigestHeader'
import DigestDate from '../../components/DigestDate/DigestDate'

const Digest = () => {
  return (
    <div>
      <BaseLayout>
        <div className='flex flex-col'>
          <DigestHeader />
          <SectionTitle
            title='Digest'
            description='Browse the newest info you subscribed.'
          />
          <DigestDate date='2021 week1:' />
          <div className='space-y-2 m-2'>
            {Array.from(new Array(3).keys()).map((item) => (
              <BaseListItem key={item} />
            ))}
          </div>
          <DigestDate date='2021 week2:' />
          <div className='space-y-2 m-2'>
            {Array.from(new Array(2).keys()).map((item) => (
              <BaseListItem key={item} />
            ))}
          </div>
          <DigestDate date='2021 week3:' />
          <div className='space-y-2 m-2'>
            {Array.from(new Array(5).keys()).map((item) => (
              <BaseListItem key={item} />
            ))}
          </div>
        </div>
      </BaseLayout>
    </div>
  )
}

export default Digest
