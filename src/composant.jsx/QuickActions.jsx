import React from "react";

const actions = [
  {
    href: "prescriptions.html",
    icon: "📝",
    title: "Nouvelle prescription",
    desc: "Créer une ordonnance avec assistance IA",
  },
  {
    href: "patients.html",
    icon: "👤",
    title: "Ajouter un patient",
    desc: "Enregistrer un nouveau patient",
  },
  {
    href: "recommendations.html",
    icon: "🎯",
    title: "Recommandations IA",
    desc: "Consulter les suggestions personnalisées",
  },
  {
    href: "history.html",
    icon: "📊",
    title: "Analyses & Rapports",
    desc: "Visualiser les statistiques détaillées",
  },
];

const QuickActions = () => (
  <div className="quick-actions">
    {actions.map((action) => (
      <a href={action.href} className="quick-action" key={action.title}>
        <div className="quick-action-icon" aria-hidden="true">{action.icon}</div>
        <div className="quick-action-title">{action.title}</div>
        <div className="quick-action-description">{action.desc}</div>
      </a>
    ))}
  </div>
);

export default QuickActions;