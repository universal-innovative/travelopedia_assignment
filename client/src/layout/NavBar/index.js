import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';

import logo from '../../assets/nav/logo.png';

NavBar.propTypes = {};

function NavBar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <nav className="navbar">
      <div className="nav-icon" onClick={() => navigate('/page-1')}>
        <img src={logo} alt="logo" />
      </div>

      <ul className="navbar-ul">
        {[...Array(2)].map((el, i) => {
          return (
            <li key={i} className={'navbar-li'}>
              <button
                style={{
                  backgroundColor:
                    i == location.pathname.split('-')[1] - 1
                      ? '#F02626'
                      : '#f0f0f0',
                  color:
                    i == location.pathname.split('-')[1] - 1
                      ? '#f0f0f0'
                      : '#000000',
                }}
                onClick={() => navigate(`page-${i + 1}`)}
              >{`Page${i + 1}`}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
