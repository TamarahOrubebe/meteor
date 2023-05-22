import axios from "axios";
import { useState, useEffect } from "react";
import Meteorites from "./Meteorites.jsx"

export default function List({ searchTerm }) {
    const [meteoriteList, setMeteoriteList] = useState([])
  useEffect(() => {
    axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh.json`)
      .then(({ data }) => {
        setMeteoriteList(data)
        console.log(meteoriteList);
      });
  }, []);

  return (
    <>
      <ul>
        {meteoriteList.map((meteor) => {
            const {name, mass, year, geoLocation, id} = meteor
            return <Meteorites key={id} name={name} mass={mass} year={year} geoLocation={geoLocation}/>
        })}
      </ul>
    </>
  );
}
