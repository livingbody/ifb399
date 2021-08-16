import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import useFetch from '../../hooks/useFetch'

const Home = () => {
  const { data, loading, error } = useFetch('https://api.quotable.io/random')
  console.log({ data, loading, error })
  return <HeroSection />
}

export default Home
