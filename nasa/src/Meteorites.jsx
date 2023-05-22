

export default function Meteorites({name, mass, year, geolocation}) {

    
    return (
        <li>
            <p>Name: {name}</p>
            <p>Mass: {mass ? mass : "Data missing"}</p>
            <p>Year: {year ? year : "Data missing"}</p>
            <p>Latitude: {geolocation ? geolocation.latitude : ""}</p>
            <p>Longitude: {geolocation ? geolocation.longitude : "has not fallen"}</p>
        </li>
    )
}