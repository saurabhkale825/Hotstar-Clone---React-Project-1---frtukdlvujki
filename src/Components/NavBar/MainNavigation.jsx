import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Details from "../AllDetailsPage/Details";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import GetVideo from "../AllDetailsPage/GetVideo";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Subscription from "../Subscription/Subscription";
import User from "../User/User";
import SearchPage from "./Pages/SearchPage";
import TvShowPage from "./Pages/TvShowPage";
import WatchList from "../WatchList/WatchList";
import AllContent from "../AllContent/AllContent";
import EditProfilePage from "../NavBar/Pages/EditProfilePage";
import PaymentPage from "../PaymentPage/PaymentPage";
import ComingSoonPage from "../ComingSoon/ComingSoon";




function MainNavigation() {
  const [login, setLogin] = useState(false);
  const [mobile , setMobile] = useState(false);

  const loginValue = JSON.parse(localStorage.getItem("user-info"));
  useEffect(() => {
    if(loginValue?.status === "success"){
      setLogin(true);
    }
  }, []);

  
  

  useEffect(() => {
    const handleScreenChange = () => {
      const screenWidth = window.innerWidth;
      setMobile(screenWidth <= 1024);
    };

    // Initial call to handleScreenChange
    handleScreenChange();

    // Add event listener for resize event
    window.addEventListener("resize", handleScreenChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleScreenChange);
    };
  }, []);


  
  return (
    <>
      <AuthContext.Provider
        value={{
          login,
          setLogin,
          mobile
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/tvshows" element={<TvShowPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:itemId" element={login? <Details/> : <User/>} />
            <Route path="/gettingvideo/:video_url" element={<GetVideo />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/user" element={<User />} />
            <Route path="/search" element={login ? <SearchPage /> : <User/>} />
            <Route path="/watchlist" element={login ? <WatchList/> : <User/>} />
            <Route path="/allcontent/:type" element={<AllContent />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/deadend" element={<ComingSoonPage />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  );
}


export default MainNavigation;
