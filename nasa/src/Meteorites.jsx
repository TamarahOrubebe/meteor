import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';
import './App.css' 

export default function Meteorites({name, mass, year, geolocation}) {

const icon = new Icon ({
    iconUrl: "./src/icon.png",
    iconSize: [36, 38]
})
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const date = new Date(year);
    return (
        <li>
            <p>Name: {name}</p>
            <p>Mass: {mass ? mass : "Data missing"} grams</p>
            <p>Time landed: {year ? date.toLocaleString("en-US", options) : "Data missing"}</p>
            <p>Latitude: {geolocation ? geolocation.latitude : ""}</p>
            <p>Longitude: {geolocation ? geolocation.longitude : "has not fallen"}</p>
            {geolocation ? 
            <MapContainer className="map" center={[geolocation.latitude, geolocation.longitude]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker className="icon" position={[geolocation.latitude, geolocation.longitude]} icon={icon}>
                    <Popup>
                        {
                            <><p>Name: {name}</p>
            <p>Mass: {mass ? mass : "Data missing"} grams</p>
            <p>Time landed: {year ? date.toLocaleString("en-US", options) : "Data missing"}</p>
            <p>Latitude: {geolocation ? geolocation.latitude : ""}</p>
            <p>Longitude: {geolocation ? geolocation.longitude : "has not fallen"}</p>
            </>}
                    </Popup>
                </Marker>
            </MapContainer>: <>
            <h3>Geo-location unknown...</h3>
            <img className ="error-img"src="./src/meteor.png"></img>
            </>
            }
        </li>
    )
}