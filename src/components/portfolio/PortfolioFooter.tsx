import { Github,  Mail, Send } from "lucide-react";

export function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left */}
            <div className="text-center md:text-left">
              <p className="text-gray-900 dark:text-white mb-2">
                Тимур
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Backend Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/Ti28282"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://tg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
          
                <Send className = "w-5 h-5" />
              </a>
              <a
                href="mailto:sabirovt50@gmail.com"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 dark:text-gray-400">
                © {currentYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
