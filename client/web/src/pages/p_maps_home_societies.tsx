import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";

import "leaflet/dist/leaflet.css";
import "../styles/pages/s_maps_home_societies.css";

import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface HomeSociety {
  id: number;
  longitude: number;
  latitude: number;
  name: string;
}

const MapsHomeSocieties = () => {
  const [home_societies, setHomeSocieties] = useState<HomeSociety[]>([]);

  useEffect(() => {
    api.get("home-societies/list-home-societies").then((response) => {
      setHomeSocieties(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <Link to="/">
            <img src={mapMarkerImg} alt="Happy" />
          </Link>
          <h2>Choose an Home Society on the map</h2>
          <p>Many children are waiting for your visit</p>
        </header>

        <footer>
          <strong>Philip</strong>
          <span>South Dakota</span>
        </footer>
      </aside>

      <Map
        center={[44.0404315, -101.6743827]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        /> */}
        {home_societies.map((home_society) => {
          return (
            <Marker
              key={home_society.id}
              icon={mapIcon}
              position={[home_society.latitude, home_society.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {home_society.name}
                <Link to={`/home-societies/${home_society.id}`}>
                  <FiArrowRight size={26} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/home-societies/create" className="create-home-society">
        <FiPlus size={26} color="#FFF" />
      </Link>
    </div>
  );
};

export default MapsHomeSocieties;
