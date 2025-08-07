import React, { useState } from "react";

const filters = ["7 jours", "30 jours", "3 mois"];
const activities = [
  {
    icon: "📝",
    type: "prescription",
    title: "Prescription validée",
    desc: "Patient: Marie Dupont - Amoxicilline 1g",
    time: "Il y a 15 minutes",
  },
  {
    icon: "⚠️",
    type: "alert",
    title: "Alerte interaction",
    desc: "Interaction détectée: Warfarine + Aspirine",
    time: "Il y a 32 minutes",
  },
  {
    icon: "👤",
    type: "patient",
    title: "Nouveau patient",
    desc: "Pierre Martin ajouté au système",
    time: "Il y a 1 heure",
  },
  {
    icon: "📝",
    type: "prescription",
    title: "Recommandation IA",
    desc: "Suggestion de réduction de posologie pour Sophie Bernard",
    time: "Il y a 2 heures",
  },
];

const DashboardGrid = () => {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div className="dashboard-grid">
      {/* Chart */}
      <div className="chart-container">
        <div className="chart-header">
          <h3 className="chart-title">Activité des prescriptions</h3>
          <div className="chart-filters">
            {filters.map((f, idx) => (
              <button
                key={f}
                className={`filter-btn${activeFilter === idx ? " active" : ""}`}
                onClick={() => setActiveFilter(idx)}
                type="button"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="chart-placeholder">
          📈 Graphique des prescriptions par jour
          <br />
          <small style={{ opacity: 0.7 }}>Intégration Chart.js à venir</small>
        </div>
      </div>
      {/* Recent activity */}
      <div className="recent-activity">
        <h3 style={{ marginBottom: "var(--spacing-lg)", color: "var(--dark-gray)" }}>
          Activité récente
        </h3>
        {activities.map((item, idx) => (
          <div className="activity-item" key={idx}>
            <div className={`activity-icon ${item.type}`}>{item.icon}</div>
            <div className="activity-content">
              <div className="activity-title">{item.title}</div>
              <div className="activity-description">{item.desc}</div>
              <div className="activity-time">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardGrid