import React from 'react';
import '../App.css';

const Header = () => {
  return (<>
    <header className="header-container">
      <img src='brand.png' alt='Brandlogo' />
      <div className="navpart">
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>FlashCard</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <button className="login-button">Login</button>
      </div>
    </header>
  </>
  );
};

export default Header;
