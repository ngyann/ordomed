import React from "react";

const stats = [
  {
    title: "Patients aujourd'hui",
    icon: "👥",
    value: 24,
    change: "+12% vs hier",
    trend: "positive",
  },
  {
    title: "Prescriptions validées",
    icon: "✅",
    value: 18,
    change: "+8% vs hier",
    trend: "positive",
    extraClass: "success",
  },
  {
    title: "Alertes IA",
    icon: "⚠️",
    value: 3,
    change: "-2 vs hier",
    trend: "negative",
    extraClass: "warning",
  },
  {
    title: "Interactions évitées",
    icon: "🛡️",
    value: 7,
    change: "+3 vs hier",
    trend: "positive",
    extraClass: "danger",
  },
];

const StatsGrid = () => (
  <div className="stats-grid">
    {stats.map((card, idx) => (
      <div
        key={card.title}
        className={`stat-card${card.extraClass ? " " + card.extraClass : ""}`}
      >
        <div className="stat-header">
          <span className="stat-title">{card.title}</span>
          <span className="stat-icon" aria-hidden="true">{card.icon}</span>
        </div>
        <div className="stat-value">{card.value}</div>
        <div className={`stat-change ${card.trend}`}>
          <span>{card.trend === "positive" ? "↗" : "↘"}</span>
          <span>{card.change}</span>
        </div>
      </div>
    ))}
  </div>
);

export default StatsGrid;