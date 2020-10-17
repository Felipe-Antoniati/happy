import mapMarkerImg from "../assets/images/map-marker.svg";
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default mapIcon;
