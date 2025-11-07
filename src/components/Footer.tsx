import { Ticket, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-xl">
                <Ticket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Каспер
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Честные розыгрыши премиальных призов. Ваш шанс выиграть мечту!
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#lotteries" className="hover:text-purple-400 transition-colors">Розыгрыши</a></li>
              <li><a href="#how-it-works" className="hover:text-purple-400 transition-colors">Как участвовать</a></li>
              <li><a href="#winners" className="hover:text-purple-400 transition-colors">Победители</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">О нас</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Центр помощи</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Правила</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Условия использования</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Гарантии</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-purple-400" />
                <a href="mailto:info@kasper.ru" className="hover:text-purple-400 transition-colors">
                  info@kasper.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-purple-400" />
                <a href="tel:+78001234567" className="hover:text-purple-400 transition-colors">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-purple-400" />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2025 Каспер. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">Пользовательское соглашение</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Политика cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
