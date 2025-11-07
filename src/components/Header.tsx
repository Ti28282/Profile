import { Button } from "./ui/button";
import { Ticket, Menu, X, User } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-xl">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Каспер
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#lotteries" className="text-gray-700 hover:text-purple-600 transition-colors">
              Розыгрыши
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">
              Как участвовать
            </a>
            <a href="#winners" className="text-gray-700 hover:text-purple-600 transition-colors">
              Победители
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              О нас
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <User className="w-4 h-4" />
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Мои билеты
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <nav className="flex flex-col gap-3">
              <a href="#lotteries" className="text-gray-700 hover:text-purple-600 transition-colors">
                Розыгрыши
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">
                Как участвовать
              </a>
              <a href="#winners" className="text-gray-700 hover:text-purple-600 transition-colors">
                Победители
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
                О нас
              </a>
            </nav>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="gap-2 w-full">
                <User className="w-4 h-4" />
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 w-full">
                Мои билеты
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
