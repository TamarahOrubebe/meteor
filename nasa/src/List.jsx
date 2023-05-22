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
    }

    axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh.json?$query=SELECT%0A%20%20%60name%60%2C%0A%20%20%60id%60%2C%0A%20%20%60nametype%60%2C%0A%20%20%60recclass%60%2C%0A%20%20%60mass%60%2C%0A%20%20%60fall%60%2C%0A%20%20%60year%60%2C%0A%20%20%60reclat%60%2C%0A%20%20%60reclong%60%2C%0A%20%20%60geolocation%60%2C%0A%20%20%60%3A%40computed_region_cbhk_fwbd%60%2C%0A%20%20%60%3A%40computed_region_nnqa_25f4%60%0AWHERE%20%60name%60%20IN%20(%22${searchTerm}%22)`)
      .then(({ data }) => {
        setMeteoriteList(data)
        setIsLoading(false)
      });
  }, [searchTerm]);

  if(isLoading){return <p>Page loading...</p>}

  return (
    <> 
      {
      meteoriteList.length === 0 ? <p>Meteor not found</p> :
      <ul>
        { 
          meteoriteList.map((meteor) => {
          const {name, mass, year, geolocation, id} = meteor
          return <Meteorites key={id} name={name} mass={mass} year={year} geolocation={geolocation}/>
        })}
      </ul>
      }
    </>
  );
}

