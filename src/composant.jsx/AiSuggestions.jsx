import React from "react";

const AiSuggestions = () => (
  <div className="ai-suggestions">
    <div className="ai-header">
      <span style={{ fontSize: 24 }}>🤖</span>
      <h3 className="ai-title">Suggestions IA du jour</h3>
    </div>
    <div className="ai-suggestion">
      <div className="suggestion-title">Optimisation des prescriptions</div>
      <div className="suggestion-description">
        3 patients pourraient bénéficier d'un ajustement de posologie basé sur leurs derniers résultats biologiques.
      </div>
    </div>
    <div className="ai-suggestion">
      <div className="suggestion-title">Prévention des interactions</div>
      <div className="suggestion-description">
        Une nouvelle interaction médicamenteuse a été identifiée pour le patient Martin P. - Vérification recommandée.
      </div>
    </div>
  </div>
);

export default AiSuggestions;