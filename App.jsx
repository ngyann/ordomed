import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import AiSuggestions from "./components/AiSuggestions/AiSuggestions";
import StatsGrid from "./components/StatsGrid/StatsGrid";
import QuickActions from "./components/QuickActions/QuickActions";
import DashboardGrid from "./components/DashboardGrid/DashboardGrid";
import './index.css';
import App from './App';

import "./styles/variables.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/layout.css";

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
          <DashboardGrid />
        </div>
      </main>
      <div className="mobile-overlay"></div>
    </div>
  );
}

export default App;