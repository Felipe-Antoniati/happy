import mapMarkerImg from "../../assets/marker.svg";
import "./styles.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={mapMarkerImg} alt="Logo" />
      <h1>happy</h1>
    </div>
  );
}
