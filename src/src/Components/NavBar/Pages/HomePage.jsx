import React from "react";
import LatestRelease from "../../Carousel/LetestRelease/LatestRelease";
import TvShows from "../../Carousel/TvShows/TvShows";
import Documentary from "../../Carousel/Documentary/Documentary";
import VideoSongCarousel from "../../Carousel/VideoSong/VideoSong";
import ShortFlimCarousel from "../../Carousel/ShortFlim/ShortFlim";
import Trailer from "../../Carousel/Trailer/Trailer";
import Footer from "../Footer";
import Logo from "../Logo";
import HeroSection from "../../HeroSection/HeroSection";
import Sidebar from "../Sidebar";
import Language from "../../Carousel/Language/Language";
import SpecialCarousel from "../../Carousel/SpecialCarousel/SpecialCarousel";
import Genres from "../../Carousel/Genres/Genres";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Sidebar />
      <Logo/>
      <LatestRelease />
      <TvShows />
      <Trailer />
      <SpecialCarousel />
      <VideoSongCarousel />
      <Language />
      <Genres />
      <ShortFlimCarousel />
      <Documentary />
      <Footer />
    </>
  );
}

export default HomePage;
