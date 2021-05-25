import React from 'react'
import BaseLayout from '../../components/layout/BaseLayout/BaseLayout'
import Pagination from '../../components/Pagination/Pagination'
import ContentHeader from '../../components/header/ContentHeader'

const Home = () => {
  return (
    <div>
      <BaseLayout title='Explore'>
        <div>
          <ContentHeader />
          <div className='h-80' />
          <Pagination currentPage={1} pageNum={10} totalItemNum={99} />
        </div>
      </BaseLayout>
    </div>
  )
}

export default Home
