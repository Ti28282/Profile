import { Button } from "../ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

export function PortfolioHero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-5xl">
                👨‍💻
              </div>
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-4">
            <span className="text-blue-600 dark:text-blue-400">Привет, я</span>
          </div>

          {/* Name */}
          <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Тимур
          </h1>

          {/* Title */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
              Backend разработчик & Архитектор
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Проектирую и разрабатываю масштабируемые backend системы. 
            Специализируюсь на Python, PostgreSQL и REST API архитектуре.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
              onClick={scrollToProjects}
            >
              Посмотреть проекты
              <ArrowDown className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Download className="w-5 h-5" />
              Скачать резюме
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Ti28282"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:example@email.com"
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
