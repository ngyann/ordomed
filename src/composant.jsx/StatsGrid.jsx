import React from 'react';

const stats = [
  {
    title: 'Patients',
    value: '1,254',
    change: '+12%',
    icon: '👥',
    color: 'var(--primary-color)'
  },
  {
    title: 'Prescriptions',
    value: '3,782',
    change: '+8%',
    icon: '📝',
    color: 'var(--success-color)'
  },
  {
    title: 'Alertes',
    value: '24',
    change: '-5%',
    icon: '⚠️',
    color: 'var(--warning-color)'
  },
  {
    title: 'Médicaments',
    value: '842',
    change: '+3%',
    icon: '💊',
    color: 'var(--info-color)'
  }
];

const StatsGrid = () => {
  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
            {stat.icon}
          </div>
          <div className="stat-content">
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;