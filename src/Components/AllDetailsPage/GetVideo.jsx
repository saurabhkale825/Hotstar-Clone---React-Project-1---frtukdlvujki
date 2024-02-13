import React, { useRef } from "react";
import { useParams } from "react-router-dom";

function GetVideos() {
  const { video_url } = useParams();
  const decodedUrl = decodeURIComponent(video_url);
  const videoRef = useRef(null);

  const id = decodedUrl.split("/").pop().split(".")[0];
  console.log(id);

  return (
    <>
      <video
        ref={videoRef}
        src={decodedUrl}
        controls
        style={{ maxWidth: "100%", height: "100%" }}
        autoPlay
      ></video>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <button
          style={{
            marginBottom: "1rem",
            color: "white",
            backgroundColor: "blue",
            borderRadius: "5px",
          }}
          onClick={addToWatchlist}
        >
          Add to Watchlist
        </button> */}
      </div>
    </>
  );
}
export default GetVideos;
