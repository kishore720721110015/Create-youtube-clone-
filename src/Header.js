import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo"><i class="fa-brands fa-youtube"></i> YouTube</div>
      <input type="text" className="search-bar" placeholder="Search" />
    </div>
  );
}

export default Header;