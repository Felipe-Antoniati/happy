import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import mapMarkerImg from '../images/map-marker.svg';

import { Link, useHistory } from 'react-router-dom';

import '../styles/components/s_aside.css';

const Aside = () => {
  const history = useHistory();
  return(
    
    <aside className="app-sidebar">
    <Link to="/app">
     <img src={mapMarkerImg} alt="Happy" />
    </Link>

    <footer>
      <button 
        type="button" 
        onClick={() => history.push('/app')}
      >
        <FiArrowLeft size={24} color="#FFF" />
      </button>
    </footer>
  </aside>
  );
}

export default Aside;