import React from 'react'
import BaseLayout from '../../components/layout/BaseLayout'
import SubscriptionSection from '../../components/SubscriptionSection/SubscriptionSection'
import SectionTitle from '../../components/header/SectionTitle'
import SubscriptionHeader from '../../components/header/SubscriptionHeader'

const Subscription = () => {
  return (
    <BaseLayout>
      <div className='space-y-3'>
        <SubscriptionHeader />
        <SectionTitle
          title='Subscription'
          description='Browse all popular tags.'
        />
        <SubscriptionSection />
      </div>
    </BaseLayout>
  )
}
export default Subscription
