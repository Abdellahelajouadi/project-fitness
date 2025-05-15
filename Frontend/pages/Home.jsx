import React from 'react'
import Gallery from '../src/components/Gallery'
import Pricing from '../src/components/Pricing'
import Hero from '../src/components/Hero'
import WorkoutSessions from '../src/components/WorkoutSessions'
import BMICalculator from '../src/components/BMICalculator'


const Home = () => {
  return(
    <>
     <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <BMICalculator />
    </>
  )
}

export default Home