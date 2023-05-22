import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';
import './App.css' 

export default function Meteorites({name, mass, year, geolocation}) {

    return (
        <li>
            <p>Name: {name}</p>
            <p>Mass: {mass ? mass : "Data missing"}</p>
            <p>Year: {year ? year : "Data missing"}</p>
            <p>Latitude: {geolocation ? geolocation.latitude : ""}</p>
            <p>Longitude: {geolocation ? geolocation.longitude : "has not fallen"}</p>
            <MapContainer className="map" center={[geolocation.latitude, geolocation.longitude]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[geolocation.longitude, geolocation.latitude]}>
                    <Popup>

                    </Popup>
                </Marker>
            </MapContainer>
        </li>
    )
}