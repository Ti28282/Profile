import { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminDashboard } from './AdminDashboard';
import { ProjectsManager } from './ProjectsManager';
import { SkillsManager } from './SkillsManager';
import { AboutManager } from './AboutManager';
import { MessagesManager } from './MessagesManager';
import { useAdmin } from '../../contexts/AdminContext';
import { Button } from '../ui/button';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface AdminPanelProps {
  onBackToPortfolio: () => void;
}

export function AdminPanel({ onBackToPortfolio }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { logout } = useAdmin();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    onBackToPortfolio();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'projects':
        return <ProjectsManager />;
      case 'skills':
        return <SkillsManager />;
      case 'about':
        return <AboutManager />;
      case 'messages':
        return <MessagesManager />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex transition-colors">
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
      />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              onClick={onBackToPortfolio}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться к портфолио
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
          
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
