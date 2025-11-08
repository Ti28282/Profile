import { Code2, LayoutDashboard, FolderKanban, Wrench, User, Mail, LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import { useAdmin } from '../../contexts/AdminContext';

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Дашборд', icon: LayoutDashboard },
  { id: 'projects', label: 'Проекты', icon: FolderKanban },
  { id: 'skills', label: 'Навыки', icon: Wrench },
  { id: 'about', label: 'О себе', icon: User },
  { id: 'messages', label: 'Сообщения', icon: Mail }
];

export function AdminSidebar({ activeTab, onTabChange, onLogout }: AdminSidebarProps) {
  const { messages } = useAdmin();
  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-gray-900 dark:text-white">Админ панель</h2>
            <p className="text-gray-500 dark:text-gray-400">Портфолио Тимур</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const showBadge = item.id === 'messages' && unreadCount > 0;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {showBadge && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4" />
          Выйти
        </Button>
      </div>
    </aside>
  );
}
