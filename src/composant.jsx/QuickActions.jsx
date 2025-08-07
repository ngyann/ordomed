import React from 'react';
import { Link } from 'react-router-dom';

const actions = [
  {
    title: 'Nouveau patient',
    icon: '👤',
    color: 'var(--primary-color)',
    path: '/patients/new'
  },
  {
    title: 'Nouvelle prescription',
    icon: '📝',
    color: 'var(--success-color)',
    path: '/prescriptions/new'
  },
  {
    title: 'Vérifier interactions',
    icon: '⚠️',
    color: 'var(--warning-color)',
    path: '/interactions'
  },
  {
    title: 'Consulter historique',
    icon: '📊',
    color: 'var(--info-color)',
    path: '/history'
  }
];

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <h3 className="section-title">Actions rapides</h3>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <Link to={action.path} className="action-card" key={index}>
            <div className="action-icon" style={{ backgroundColor: `${action.color}20`, color: action.color }}>
              {action.icon}
            </div>
            <div className="action-title">{action.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;