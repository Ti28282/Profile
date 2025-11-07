import { Card } from "../ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Чистая архитектура",
    description: "Проектирую масштабируемые системы с использованием SOLID принципов"
  },
  {
    icon: Palette,
    title: "API Design",
    description: "Разрабатываю интуитивные REST API с качественной документацией"
  },
  {
    icon: Rocket,
    title: "Оптимизация",
    description: "Оптимизирую запросы к БД и производительность серверной части"
  },
  {
    icon: Users,
    title: "Командная работа",
    description: "Эффективно работаю в команде и делюсь знаниями"
  }
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900 dark:text-white">Обо мне</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Backend разработчик с фокусом на построение надежных и масштабируемых систем. 
              Увлечен архитектурой приложений и оптимизацией баз данных.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text */}
            <div>
              <h3 className="mb-4 text-gray-900 dark:text-white">
                Привет! Меня зовут Тимур
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Мне 23 года, и я backend разработчик, специализирующийся на построении 
                  высокопроизводительных серверных приложений. Моя страсть — создавать 
                  надежные API и проектировать архитектуру сложных систем.
                </p>
                <p>
                  Работаю преимущественно с Python и PostgreSQL, разрабатывая RESTful API 
                  и микросервисные архитектуры. Также имею опыт во frontend разработке, 
                  что помогает мне лучше понимать потребности клиентской части приложения.
                </p>
                <p>
                  Постоянно изучаю новые подходы к оптимизации баз данных, масштабированию 
                  приложений и best practices в области backend разработки. Люблю решать 
                  сложные архитектурные задачи и оптимизировать производительность.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
                <div className="text-4xl mb-2 text-blue-600 dark:text-blue-400">23</div>
                <div className="text-gray-700 dark:text-gray-300">Года</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
                <div className="text-4xl mb-2 text-purple-600 dark:text-purple-400">30+</div>
                <div className="text-gray-700 dark:text-gray-300">Проектов</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
                <div className="text-4xl mb-2 text-green-600 dark:text-green-400">20+</div>
                <div className="text-gray-700 dark:text-gray-300">API endpoints</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
                <div className="text-4xl mb-2 text-orange-600 dark:text-orange-400">99.9%</div>
                <div className="text-gray-700 dark:text-gray-300">Uptime</div>
              </Card>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
