import React from 'react';
import Sidebar from './composant.jsx/Sidebar';
import Header from './composant.jsx/Header';
import AiSuggestions from './composant.jsx/AiSuggestions';
import StatsGrid from './composant.jsx/StatsGrid';
import QuickActions from './composant.jsx/QuickActions';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="page-content">
          <AiSuggestions />
          <StatsGrid />
          <QuickActions />
        </div>
      </main>
      <div className="mobile-overlay"></div>
    </div>
  );
}

export default App;
