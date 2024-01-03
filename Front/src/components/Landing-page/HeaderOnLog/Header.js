import React from 'react';
import './Header.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import userPhoto from '../../../images/User.png';

const HeaderOnLog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 sticky-top">
      <Link className="navbar-brand text-info" to="/">
        Resume Builder
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
       

        <ul className="navbar-nav align-items-center">
       
          <li className="nav-item ">
            <button onClick={handleLoginClick} className="nav-link btn btn-link">
              LogOUT
            </button>
          </li>

        
        </ul>
      </div>
    </nav>
  );
};

export default HeaderOnLog;
