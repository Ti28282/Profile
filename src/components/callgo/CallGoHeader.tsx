import { Phone, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '../ui/button';
import { useState } from 'react';

interface CallGoHeaderProps {
  onAuthClick: () => void;
}

export function CallGoHeader({ onAuthClick }: CallGoHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900 dark:text-white">CallGo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Возможности
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Как работает
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Тарифы
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
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

            <Button
              variant="outline"
              onClick={onAuthClick}
              className="hidden sm:flex"
            >
              Войти
            </Button>

            <Button
              onClick={onAuthClick}
              className="hidden sm:flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Начать бесплатно
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Как работает
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Тарифы
              </button>
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={onAuthClick}
                  className="flex-1"
                >
                  Войти
                </Button>
                <Button
                  onClick={onAuthClick}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Начать
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
