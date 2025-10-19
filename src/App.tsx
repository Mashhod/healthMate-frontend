import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { UploadReport } from './components/UploadReport';
import { AddVitals } from './components/AddVitals';
import { ViewReport } from './components/ViewReport';
import { Timeline } from './components/Timeline';
import { Navbar } from './components/Navbar';
import { LogoutModal } from './components/LogoutModal';
import { Toaster } from './components/ui/sonner';

type Page = 'dashboard' | 'upload' | 'vitals' | 'view' | 'timeline';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setIsLoggedIn(false);
    setShowLogoutModal(false);
    setCurrentPage('dashboard');
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const navigateToDashboard = () => {
    setCurrentPage('dashboard');
  };

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar onLogout={handleLogoutClick} />
        
        {currentPage === 'dashboard' && (
          <Dashboard onNavigate={handleNavigate} />
        )}
        
        {currentPage === 'upload' && (
          <UploadReport onBack={navigateToDashboard} />
        )}
        
        {currentPage === 'vitals' && (
          <AddVitals onBack={navigateToDashboard} />
        )}
        
        {currentPage === 'view' && (
          <ViewReport onBack={navigateToDashboard} />
        )}
        
        {currentPage === 'timeline' && (
          <Timeline onBack={navigateToDashboard} />
        )}
      </div>

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />

      <Toaster position="top-right" />
    </>
  );
}
