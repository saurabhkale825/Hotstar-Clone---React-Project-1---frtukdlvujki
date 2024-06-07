import React, { useContext } from "react";
import "./Movies.css";
import useFetch from "../../../Hooks/useFetch";
import AuthContext from "../../../Context/AuthContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';

function Movies() {
  const filterType = "movie";
  const [data] = useFetch(filterType);
  const { mobile } = useContext(AuthContext);

  console.log("Movies data", data);

  return (
    <div className="movies-carousel">
      <div className="movies-carousel-heading">
        <h3>{filterType}</h3>
        <div>View All</div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="movie-card">
              <img src={item.thumbnail} alt="logo" width="100%" height="100%" />
              <div className="movie-card-overlay">
                <p>More Info</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Movies;
