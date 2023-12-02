import {useState , useEffect} from 'react'



function useFetch(filterType) {

const[data , setData] = useState([]);

useEffect(() => {
    async function fetchData() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "${filterType}"}&limit=10`,
            {
              method: "GET",
              headers: {
                projectID: "knjxpr9vh9wr",
              },
            }
          );
          const json = await response.json();
          // console.log(json);
          setData(json.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }, []);

    return [data];
}

export default useFetch