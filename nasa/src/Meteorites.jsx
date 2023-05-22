

export default function Meteorites({name, mass, year, geoLocation}) {
    return (
        <li>
            <p>Name: {name}</p>
            <p>Mass: {mass}</p>
            <p>Year: {year}</p>
            <p>Latitude: {geoLocation.latitude}</p>
            <p>Longitude: {geoLocation.longitude}</p>
        </li>
    )
}