import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">Tableau de bord</h1>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Rechercher..." className="search-input" />
          <button className="search-button">🔍</button>
        </div>
        <div className="user-menu">
          <div className="user-avatar">👨‍⚕️</div>
          <div className="user-info">
            <div className="user-name">Dr. Martin</div>
            <div className="user-role">Médecin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;