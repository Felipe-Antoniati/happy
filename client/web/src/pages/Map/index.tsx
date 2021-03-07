import Logo from "../../Components/Logo";
import { Link } from "react-router-dom";

import {
  FiInfo,
  FiPlus,
  FiArrowRight,
  FiGithub,
  FiLinkedin
} from "react-icons/fi";

import { 
  MapContainer, 
  TileLayer, 
  Marker, 
  Popup 
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapIcon from "../../utils/mapIcon";

import "./styles.css";

export default function Map() {
  return (
    <div id="map-page">
      <div className="map-content">
        <header>
        <div>
            <Link to="/">
              <FiLinkedin />
            </Link>
            <Link to="/map">
              <FiGithub />
            </Link>
            <Link to="/map">
              <FiInfo size={30}/>
            </Link>            
          </div>
          <h2>
            <b>Bertioga,</b>
            <i> São Paulo</i>
          </h2>
          <Logo />
        </header>
        <main>
          <MapContainer
            center={[-23.8413458, -46.1422318]}
            zoom={15}
            style={{ 
              width: "100%", 
              height: "100%" 
            }}
          >
            <TileLayer 
              url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />
            <Marker 
              icon={mapIcon} 
              position={[-23.8413458, -46.1422318]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                <h1>Instituto Casa Lar - Minas Gerais</h1>
                <Link to="/map" className="go-hs">
                  <FiArrowRight />
                </Link>
              </Popup>
            </Marker>
          </MapContainer>
          <Link to="/map" className="add-hs">
            <FiPlus />
          </Link>
        </main>
      </div>
    </div>
  );
}
