import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import PreviousScansPage from './pages/PreviousScansPage';
// import RewardsPage from './pages/RewardsPage';

function Landing() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-primary-foreground shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex space-x-4">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/reports" className={({ isActive }) => isActive ? "underline" : ""}>
                  Previous Scans
                </NavLink>
              </li>
              <li>
                <NavLink to="/rewards" className={({ isActive }) => isActive ? "underline" : ""}>
                  Rewards
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Landing;
