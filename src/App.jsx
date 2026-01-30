import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AdminProvider, useAdmin } from './contexts/AdminContext';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminPanel } from './components/admin/AdminPanel';
import { PortfolioHeader } from './components/portfolio/PortfolioHeader';
import { PortfolioHero } from './components/portfolio/PortfolioHero';
import { About } from './components/portfolio/About';
import { Skills } from './components/portfolio/Skills';
import { Projects } from './components/portfolio/Projects';
import { Contact } from './components/portfolio/Contact';
import { PortfolioFooter } from './components/portfolio/PortfolioFooter';
import { Toaster } from './components/ui/sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function AppContent() {
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const { isAuthenticated } = useAdmin();

  useEffect(() => {
    // Проверяем URL при монтировании и при изменениях
    const checkRoute = () => {
      setIsAdminRoute(window.location.pathname === '/admin');
    };

    checkRoute();

    // Слушаем изменения в истории браузера
    window.addEventListener('popstate', checkRoute);
    return () => window.removeEventListener('popstate', checkRoute);
  }, []);

  // Показываем логин админки
  if (isAdminRoute && !isAuthenticated) {
    return (
      <AdminLogin 
        onLoginSuccess={() => {
          // После успешного входа остаемся в админке
        }} 
      />
    );
  }

  // Показываем админ панель
  if (isAdminRoute && isAuthenticated) {
    return (
      <AdminPanel 
        onBackToPortfolio={() => {
          window.history.pushState({}, '', '/');
          setIsAdminRoute(false);
        }} 
      />
    );
  }

  // Показываем портфолио
  return (
    
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PortfolioHeader />
      
      <main>
        <PortfolioHero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <PortfolioFooter />
    </div>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<AppContent />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </AdminProvider>
  );
}
