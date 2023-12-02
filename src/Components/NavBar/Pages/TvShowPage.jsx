import React from 'react'
import TvShows from '../../Carousel/TvShows/TvShows'
import HeroSection from '../../HeroSection/HeroSection'
import Sidebar from '../Sidebar'
import Logo from '../Logo'

function TvShowPage() {
  return (
    <>
        <HeroSection/>
        <Logo />
        <Sidebar/>
        <TvShows />
    </>
  )
}

export default TvShowPage