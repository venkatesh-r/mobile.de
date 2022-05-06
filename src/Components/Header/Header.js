import React from 'react';
import './Header.css'; 
import logo from '../../assets/images/download.svg';

const Header = () => {
  return (
    <>
    <div className="container-fluid maxWidth">
    <div className="header-wrapper">
      <div className="container">
         <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 left">
           <img src={logo} alt="logo"/>
           <p>Deutschlands größter Fahrzeugmarkt</p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 right">
            <ul>
              <li><a href="#0">Suchen</a></li>
              <li><a href="#0">Verkaufen</a></li>
              <li><a href="#0">Informieren</a></li>
            </ul>
        </div>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Header;