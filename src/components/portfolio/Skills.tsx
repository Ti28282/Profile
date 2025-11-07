import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const skillCategories = [
  {
    title: "Backend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "PostgreSQL", level: 90 },
      { name: "REST API", level: 95 },
      { name: "FastAPI", level: 85 },
      { name: "SQLAlchemy", level: 80 }
    ]
  },
  {
    title: "Архитектура & DevOps",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Микросервисы", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Nginx", level: 70 },
      { name: "CI/CD", level: 75 }
    ]
  },
  {
    title: "Frontend & Tools",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", level: 70 },
      { name: "TypeScript", level: 65 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 80 },
      { name: "Postman", level: 85 }
    ]
  }
];

const technologies = [
  "Python", "PostgreSQL", "FastAPI", "Django", "Flask",
  "SQLAlchemy", "REST API", "Docker", "Redis", "Celery",
  "Git", "Linux", "Nginx", "Pytest", "Alembic", "JWT",
  "OAuth", "WebSockets", "GraphQL", "React", "TypeScript"
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900 dark:text-white">Навыки</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Технологии и инструменты для построения надежных backend систем и масштабируемых API
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
              >
                <div className="mb-6">
                  <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white mb-2`}>
                    {category.title}
                  </div>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="mb-6 text-center text-gray-900 dark:text-white">
              Технологии
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:scale-105 transition-transform"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
