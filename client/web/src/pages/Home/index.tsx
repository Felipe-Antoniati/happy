import Logo from "../../Components/Logo";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import "./styles.css";

export default function Home() {
  return (
    <div id="home-page">
      <div className="content-home">
        <header className="container">
          <Logo />
          <h2>
            <b>Bertioga</b>,<i> São Paulo</i>
          </h2>
        </header>
        <main className="container">
          <h1>Ser feliz é levar felicidade para o mundo</h1>
          <div>
            <p>Visite casas sociais e mude a vida de muitas crianças</p>
            <Link to="/home">
              <FiArrowRight size={30} />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
