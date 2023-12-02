import React from 'react'

async function addToWatchlist() {
    try {
      let item = id;
      const Header = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDBiZTY5YTNjYjUwMjQyNjVmYmI5NyIsImlhdCI6MTY5ODc0MTg2NSwiZXhwIjoxNzMwMjc3ODY1fQ.K6xvvZjJ_b3MQNx1kVGVHjKKs_y-4xCWrhgjlmb95cA",
        projectID: "knjxpr9vh9wr",
      };
      let addData = await fetch(`${process.env.REACT_APP_WATCHLIST_URL}`, {
        method: "PATCH",
        headers: Header,
        body: JSON.stringify(item),
      });

      let response = await addData.json();
      console.log(response);
      if (response.status === "success") {
        alert(response.message);
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log(e);
    }

  }
export default useAddToWatchList()