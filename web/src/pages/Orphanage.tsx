import React, { useEffect, useState } from "react";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import mapIcon from "../utils/mapIcon";
import Aside from "../components/Aside";
import api from "../services/api";

import "../styles/pages/orphanage.css";

interface Orphanage {
  longitude: number;
  latitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/list-orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <p>Loading...</p>;
  }

  return (
    <div id="page-orphanage">
      <Aside />
      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          {orphanage.images.map((image, index) => {
            return (
              <div className="images">
                <button 
                  key={image.id} 
                  type="button" 
                  className={activeImageIndex === index ? 'active' : ''}
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={orphanage.name} />
                </button>
              </div>
            );
          })}

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                /> */}
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View directions on Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Visit Instructions</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Monday to Fryday <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  We server <br />
                  weekends
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669d" />
                  We don't server <br />
                  in weekends.
                </div>
              )}
            </div>
            {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Contact us
            </button> */}
          </div>
        </div>
      </main>
    </div>
  );
}