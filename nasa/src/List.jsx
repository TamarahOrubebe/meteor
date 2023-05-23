import axios from "axios";
import { useState, useEffect } from "react";
import Meteorites from "./Meteorites.jsx"

export default function List({ searchTerm }) {
  const [meteoriteList, setMeteoriteList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(searchTerm===""){
      axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh.json`)
      .then(({ data }) => {
        setMeteoriteList(data)
        setIsLoading(false)
      });
    } else if (searchTerm==="Largest"){
      axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh.json?$query=SELECT%0A%20%20%60name%60%2C%0A%20%20%60id%60%2C%0A%20%20%60nametype%60%2C%0A%20%20%60recclass%60%2C%0A%20%20%60mass%60%2C%0A%20%20%60fall%60%2C%0A%20%20%60year%60%2C%0A%20%20%60reclat%60%2C%0A%20%20%60reclong%60%2C%0A%20%20%60geolocation%60%2C%0A%20%20%60%3A%40computed_region_cbhk_fwbd%60%2C%0A%20%20%60%3A%40computed_region_nnqa_25f4%60%0AWHERE%20%60mass%60%20%3E%2021000000%0AORDER%20BY%20%60mass%60%20DESC%20NULL%20LAST`)
      .then(({ data }) => {
        setMeteoriteList(data)
        setIsLoading(false)
      });
    } else if (searchTerm.includes("?")){
      console.log(searchTerm)
      const split = searchTerm.split("?")
      const from = split[0]
      const to = split[1]
      axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh.json?$query=SELECT%0A%20%20%60name%60%2C%0A%20%20%60id%60%2C%0A%20%20%60nametype%60%2C%0A%20%20%60recclass%60%2C%0A%20%20%60mass%60%2C%0A%20%20%60fall%60%2C%0A%20%20%60year%60%2C%0A%20%20%60reclat%60%2C%0A%20%20%60reclong%60%2C%0A%20%20%60geolocation%60%2C%0A%20%20%60%3A%40computed_region_cbhk_fwbd%60%2C%0A%20%20%60%3A%40computed_region_nnqa_25f4%60%0AWHERE%0A%20%20%60year%60%0A%20%20%20%20BETWEEN%20%22${from}-01-01T14%3A13%3A19%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20AND%20%22${to}-12-31T14%3A13%3A19%22%20%3A%3A%20floating_timestamp`)
      .then(({ data }) => {
        setMeteoriteList(data)
        setIsLoading(false)
      });
    } else {
    axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh.json?$query=SELECT%0A%20%20%60name%60%2C%0A%20%20%60id%60%2C%0A%20%20%60nametype%60%2C%0A%20%20%60recclass%60%2C%0A%20%20%60mass%60%2C%0A%20%20%60fall%60%2C%0A%20%20%60year%60%2C%0A%20%20%60reclat%60%2C%0A%20%20%60reclong%60%2C%0A%20%20%60geolocation%60%2C%0A%20%20%60%3A%40computed_region_cbhk_fwbd%60%2C%0A%20%20%60%3A%40computed_region_nnqa_25f4%60%0AWHERE%20%60name%60%20IN%20(%22${searchTerm[0].toUpperCase()+searchTerm.slice(1)}%22)`)
      .then(({ data }) => {
        setMeteoriteList(data)
        setIsLoading(false)
      });
  }
}
  , [searchTerm]);

  if(isLoading){return <p>Page loading...</p>}

  return (
    <> 
      {
      meteoriteList.length === 0 ? <p>Meteor(s) not found</p> :
      <ul>
        { 
          <Meteorites meteoriteList={meteoriteList}/>
        }
      </ul>
      }
    </>
  );
}
