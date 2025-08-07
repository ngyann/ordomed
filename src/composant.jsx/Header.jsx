import React from "react";

const Header = () => (
  <header className="header">
    <div className="header-left">
      {/* Simuler le menu mobile : à brancher sur un context ou state */}
      <button className="mobile-menu-toggle" type="button">
        ☰
      </button>
      <h1 className="header-title">Tableau de bord</h1>
    </div>
    <div className="header-right">
      <div className="header-search">
        <input type="text" placeholder="Rechercher un patient..." />
        <span className="header-search-icon" aria-hidden="true">🔍</span>
      </div>
      <div
        className="header-notifications"
        tabIndex={0}
        role="button"
        aria-label="Voir les notifications"
        onClick={() => (window.location.href = "notifications.html")}
      >
        <span style={{ fontSize: "20px" }}>🔔</span>
        <span className="notification-badge">3</span>
      </div>
      <div className="user-menu">
        <div
          className="user-avatar"
          tabIndex={0}
          role="button"
          aria-label="Profil utilisateur"
          onClick={() => (window.location.href = "settings.html")}
        >
          DM
        </div>
      </div>
    </div>
  </header>
);

export default Header;