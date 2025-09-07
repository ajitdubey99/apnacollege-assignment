'use client'

import { useState, useEffect } from 'react';
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import TopicsPage from '../components/TopicsPage';
import ProgressPage from '../components/ProgressPage';
import ProfilePage from '../components/ProfilePage';
import { topics } from '../data/topics';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);
  const [completedProblems, setCompletedProblems] = useState({});
const [expandedTopics, setExpandedTopics] = useState({});
  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCompletedProblems({});
    setExpandedTopics({});
    setUser(null);
    setCurrentPage('login');
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const toggleProblemComplete = (problemId) => {
    setCompletedProblems(prev => ({
      ...prev,
      [problemId]: !prev[problemId]
    }));
  };

  useEffect(() => {
    const initialCompleted = {};

    topics.forEach(topic => {
      topic.subtopics?.forEach(subtopic => {
        if (subtopic.status === 'Done') {
          initialCompleted[subtopic.id] = true;
        }
      });
    });

    setCompletedProblems(initialCompleted);
  }, []);

  if (currentPage === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Dashboard
      user={user}
      currentPage={currentPage}
      onLogout={handleLogout}
      onNavigate={handleNavigation}
    >
      {currentPage === 'dashboard' && (
        <TopicsPage
          completedProblems={completedProblems}
          onToggleComplete={toggleProblemComplete}
          expandedTopics={expandedTopics}
          setExpandedTopics={setExpandedTopics}
        />
      )}
      {currentPage === 'progress' && (
        <ProgressPage completedProblems={completedProblems} />
      )}
      {currentPage === 'profile' && (
        <ProfilePage user={user} />
      )}
    </Dashboard>
  );
}