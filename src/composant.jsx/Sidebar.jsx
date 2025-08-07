import React from "react";
import styles from "./Sidebar.module.css"; // Si tu veux surcharger, sinon laisse le CSS global

const Sidebar = () => (
  <nav className="sidebar">
    <div className="sidebar-header">
      <h2 className="logo">
        <div className="logo-icon" aria-hidden="true">🏥</div>
        <span className="logo-text">OrdoMed</span>
      </h2>
    </div>
    <div className="sidebar-nav">
      {/* Principal */}
      <div className="nav-section">
        <div className="nav-section-title">Principal</div>
        <a href="dashboard.html" className="nav-item active">
          <span className="nav-item-icon" aria-hidden="true">📊</span>
          <span className="nav-item-text">Tableau de bord</span>
        </a>
        <a href="patients.html" className="nav-item">
          <span className="nav-item-icon">👥</span>
          <span className="nav-item-text">Patients</span>
        </a>
        <a href="prescriptions.html" className="nav-item">
          <span className="nav-item-icon">📝</span>
          <span className="nav-item-text">Prescriptions</span>
        </a>
      </div>
      {/* Outils IA */}
      <div className="nav-section">
        <div className="nav-section-title">Outils IA</div>
        <a href="recommendations.html" className="nav-item">
          <span className="nav-item-icon">🤖</span>
          <span className="nav-item-text">Recommandations</span>
        </a>
        <a href="interactions.html" className="nav-item">
          <span className="nav-item-icon">⚠️</span>
          <span className="nav-item-text">Interactions</span>
        </a>
      </div>
      {/* Historique */}
      <div className="nav-section">
        <div className="nav-section-title">Historique</div>
        <a href="history.html" className="nav-item">
          <span className="nav-item-icon">📚</span>
          <span className="nav-item-text">Historique médical</span>
        </a>
        <a href="notifications.html" className="nav-item">
          <span className="nav-item-icon">🔔</span>
          <span className="nav-item-text">Notifications</span>
        </a>
      </div>
      {/* Paramètres */}
      <div className="nav-section">
        <div className="nav-section-title">Paramètres</div>
        <a href="settings.html" className="nav-item">
          <span className="nav-item-icon">⚙️</span>
          <span className="nav-item-text">Paramètres</span>
        </a>
        <a href="admin.html" className="nav-item">
          <span className="nav-item-icon">🛡️</span>
          <span className="nav-item-text">Administration</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Sidebar;