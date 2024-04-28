import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./GetVideo.css";

function GetVideos() {
  const { video_url } = useParams();
  const decodedUrl = decodeURIComponent(video_url);
  const videoRef = useRef(null);

  const id = decodedUrl.split("/").pop().split(".")[0];
  // console.log(id);

  return (
    <div className="video-page">
      <Link to={`/details/${id}`}>
      <div className="video-back-btn">
      <ArrowBackIcon sx={{ fontSize: 30 }} />
      </div>
      </Link>
      <div  className="video-banner">
      <video
       
        ref={videoRef}
        src={decodedUrl}
        controls
        autoPlay
      ></video>
      </div>
    </div>
  );
}
export default GetVideos;
