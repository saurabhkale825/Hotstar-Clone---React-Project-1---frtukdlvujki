import React from 'react'
import LatestRelease from '../../Carousel/LetestRelease/LatestRelease'
import HeroSection from '../../HeroSection/HeroSection'
import Sidebar from '../Sidebar'
import Logo from '../Logo'
import Footer from '../Footer'

function MoviesPage() {
  return (
    <>
        <HeroSection/>
        <Logo />
        <Sidebar />
        <LatestRelease />
        <Footer />
    </>
  )
}

export default MoviesPage