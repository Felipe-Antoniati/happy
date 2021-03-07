import { Link } from "react-router-dom";

import "./styles.css";

interface ActiveModal {
  state: string;
  click: any;
}

const Modal: React.FC<ActiveModal> = ({ state, click }) => {
  return (
    <div id="modal-container" className={state}>
      <div className="modal-content">
        <div id="form">
          <h2>Escolha uma casa social no mapa</h2>
          <p>Muitas crianças estão esperando sua visita</p>
          <Link 
            to="/map" 
            onClick={click}
          >
            OK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
