import React from 'react';

const AiSuggestions = () => {
  return (
    <div className="ai-suggestions">
      <div className="ai-suggestions-header">
        <h3>Suggestions IA</h3>
        <button className="refresh-button">🔄</button>
      </div>
      <div className="ai-suggestions-content">
        <div className="ai-suggestion-item">
          <div className="ai-suggestion-icon">💊</div>
          <div className="ai-suggestion-text">
            <p>Considérez de réduire la dose d'amoxicilline pour le patient Jean Dupont en raison de sa fonction rénale.</p>
          </div>
        </div>
        <div className="ai-suggestion-item">
          <div className="ai-suggestion-icon">⚠️</div>
          <div className="ai-suggestion-text">
            <p>Interaction potentielle détectée entre la warfarine et l'aspirine prescrites à Marie Martin.</p>
          </div>
        </div>
        <div className="ai-suggestion-item">
          <div className="ai-suggestion-icon">📊</div>
          <div className="ai-suggestion-text">
            <p>Les niveaux de glycémie de Paul Bernard sont élevés depuis 3 mois. Envisagez un ajustement du traitement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSuggestions;