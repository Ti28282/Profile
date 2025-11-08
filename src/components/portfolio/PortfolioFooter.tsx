import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Heart,
} from "lucide-react";

export function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Тимур
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Backend разработчик, специализирующийся на
                Python, PostgreSQL и REST API
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-3 text-gray-900 dark:text-white">
                Навигация
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Обо мне
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Навыки
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Проекты
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="mb-3 text-gray-900 dark:text-white">
                Социальные сети
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:example@email.com"
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <p>
                &copy; {currentYear} Тимур. Все права защищены.
              </p>
              <p className="flex items-center gap-1">
                Сделано с{" "}
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
                и Python
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
