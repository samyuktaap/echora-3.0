import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ImpactDashboard from './pages/ImpactDashboard';
import Leaderboard from './pages/Leaderboard';
import MapView from './pages/MapView';
import Meetups from './pages/Meetups';
import Profile from './pages/Profile';
import TaskBoard from './pages/TaskBoard';
import NGODashboard from './pages/NGODashboard';
import NGORequests from './pages/NGORequests';
import VolunteerSignup from './pages/VolunteerSignup';
import VolunteerOnboarding from './pages/VolunteerOnboarding';

// Components
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Toaster position="top-right" />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} /> {/* Login handles both */}
            
            {/* Protected Routes (Wrapped in Layout) */}
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="impact" element={<ImpactDashboard />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="map" element={<MapView />} />
              <Route path="meetups" element={<Meetups />} />
              <Route path="profile" element={<Profile />} />
              <Route path="tasks" element={<TaskBoard />} />
              <Route path="ngo-dashboard" element={<NGODashboard />} />
              <Route path="ngo-requests" element={<NGORequests />} />
              <Route path="volunteer-onboarding" element={<VolunteerOnboarding />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
