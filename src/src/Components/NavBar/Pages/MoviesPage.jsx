import React from 'react'
import LatestRelease from '../../Carousel/LetestRelease/LatestRelease'
import HeroSection from '../../HeroSection/HeroSection'
import Sidebar from '../Sidebar'
import Logo from '../Logo'

function MoviesPage() {
  return (
    <>
        <HeroSection/>
        <Logo />
        <Sidebar />
        <LatestRelease />
    </>
  )
}

export default MoviesPage