import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';
import './App.css' 

export default function Meteorites({meteoriteList}) {

const icon = new Icon ({
    iconUrl: "./src/icon.png",
    iconSize: [36, 38]
})
    return (
        <li>
            <MapContainer key="map" className="map" center={[0, 0]} zoom={2} scrollWheelZoom={false}>
                <TileLayer key="TileLayer"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            {meteoriteList.map((meteor, index)=>{
                return (
                <>
                {meteor.geolocation ?
                <Marker key={index} className="icon" position={[meteor.geolocation.latitude, meteor.geolocation.longitude]} icon={icon}>
                    <Popup key={index}>
                        <div>
                        </div>
                        {
                            <div key={index}>
                            <p>Name: {meteor.name}</p>
                            <p>Mass: {meteor.mass ? meteor.mass/1000 : "Data missing"} kg(s)</p>
                            <p>Year: {meteor.year ? meteor.year.slice(0,4) : "Data missing"}</p>
                            <p>Latitude: {meteor.geolocation ? meteor.geolocation.latitude : ""}</p>
                            <p>Longitude: {meteor.geolocation ? meteor.geolocation.longitude : "has not fallen"}</p>
                            </div>
                        }
                    </Popup>
                </Marker>
                : null}
                </> 
                )
            })

            }
            </MapContainer>
        </li>
    )
}