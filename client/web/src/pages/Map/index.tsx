import Logo from "../../Components/Logo";
import { FiInfo, FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Map() {
  return (
    <div id="map-page">
      <div className="map-content">
        <header>
          <div>
            <Link to="/">
              <FiArrowLeftCircle />
            </Link>
            <Link to="/map">
              <FiInfo />
            </Link>
          </div>
          <h2>
            Escolha um ponto no mapa para poder
            <strong> visitar</strong>
          </h2>
          <Logo />
        </header>
        <main>
          Aqui vai um mapa
        </main>
      </div>
    </div>
  );
}
