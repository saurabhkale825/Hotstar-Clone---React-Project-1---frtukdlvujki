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
import DeadEndPage from "./Pages/DeadEndPage";
import User from "../User/User";
import SearchPage from "./Pages/SearchPage";
import TvShowPage from "./Pages/TvShowPage";
import WatchList from "../WatchList/WatchList";
import AllContent from "../AllContent/AllContent";
import EditProfilePage from "../NavBar/Pages/EditProfilePage";




function MainNavigation() {
  const [login, setLogin] = useState(false);

  const loginValue = JSON.parse(localStorage.getItem("user-info"));
  // console.log(loginValue.status);
  useEffect(() => {
    if(loginValue?.status === "success"){
      setLogin(true);
    }
  }, []);
  
  return (
    <>
      <AuthContext.Provider
        value={{
          login,
          setLogin,
        }}
      >
       
       
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/tvshows" element={<TvShowPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/details/:itemId" element={<Details />} />
              <Route path="/gettingvideo/:video_url" element={<GetVideo />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/deadend" element={<DeadEndPage />} />
              <Route path="/user" element={<User />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/allcontent" element={<AllContent />} />
              <Route path="/editprofile" element={<EditProfilePage />} />
            </Routes>
          </Router>
          
      </AuthContext.Provider>
    </>
  );
}

export default MainNavigation;
