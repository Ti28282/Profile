import { Phone, Mail, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export function CallGoFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-white">CallGo</span>
            </div>
            <p className="text-gray-400 mb-4">
              Аудио-звонки нового поколения для команд любого размера.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Обновления
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Пресс-кит
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:hello@callgo.ru" className="text-gray-400 hover:text-white transition-colors">
                  hello@callgo.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+78001234567" className="text-gray-400 hover:text-white transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                <span className="text-gray-400">
                  Москва, Россия
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} CallGo. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
