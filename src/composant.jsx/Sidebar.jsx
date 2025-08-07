import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Ordomed</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Accueil</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link">
              <span className="nav-icon">📊</span>
              <span className="nav-text">Tableau de bord</span>
            </Link>
          </li>
          <li>
            <Link to="/patients" className="nav-link">
              <span className="nav-icon">👥</span>
              <span className="nav-text">Patients</span>
            </Link>
          </li>
          <li>
            <Link to="/prescriptions" className="nav-link">
              <span className="nav-icon">📝</span>
              <span className="nav-text">Prescriptions</span>
            </Link>
          </li>
          <li>
            <Link to="/medicaments" className="nav-link">
              <span className="nav-icon">💊</span>
              <span className="nav-text">Médicaments</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-link">
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Paramètres</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;