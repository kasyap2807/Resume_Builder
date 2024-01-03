import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import userPhoto from '../../../images/User.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login');
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
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link" to="/#ContactUs">
              Contact Us
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <button onClick={handleLoginClick} className="nav-link btn btn-link">
              Login
            </button>
          </li>

          <li className="nav-item">
            <button onClick={handleLoginClick} className="nav-link btn btn-primary">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
