import React from 'react'
import BaseLayout from '../../components/layout/BaseLayout'
import Pagination from '../../components/Pagination/Pagination'
import ContentHeader from '../../components/header/ContentHeader'
import BaseListItem from '../../components/BaseListItem/BaseListItem'

const Home = () => {
  return (
    <div>
      <BaseLayout title='Explore'>
        <div>
          <ContentHeader />
          <div className='space-y-2 m-2 '>
            <BaseListItem />
            <BaseListItem />
            <BaseListItem />
            <BaseListItem />
            <BaseListItem />
            <BaseListItem />
            <BaseListItem />
            <BaseListItem />
            <BaseListItem />
            <BaseListItem />
          </div>
          <Pagination currentPage={1} pageNum={10} totalItemNum={99} />
        </div>
      </BaseLayout>
    </div>
  )
}

export default Home
