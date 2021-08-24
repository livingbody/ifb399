import * as React from 'react'
import BaseLayout from '../../components/layout/BaseLayout'
import Pagination from '../../components/Pagination/Pagination'
import ExploreHeader from '../../components/header/ExploreHeader'
import BaseListItem from '../../components/BaseListItem/BaseListItem'
import SectionTitle from '../../components/header/SectionTitle'

const Explore = () => {
  return (
    <div>
      <BaseLayout>
        <div>
          <ExploreHeader />
          <SectionTitle title='Explore' description='Browse popular topics.' />
          <div className='space-y-2 m-2'>
            {Array.from(new Array(10).keys()).map((item) => (
              <BaseListItem key={item} />
            ))}
          </div>
          <Pagination currentPage={1} pageNum={10} totalItemNum={99} />
        </div>
      </BaseLayout>
    </div>
  )
}

export default Explore
