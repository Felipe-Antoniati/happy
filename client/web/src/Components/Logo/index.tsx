import markerImg from "../../assets/marker.png";
import "./styles.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={markerImg} alt="Logo" />
      <h1>happy</h1>
    </div>
  );
}
