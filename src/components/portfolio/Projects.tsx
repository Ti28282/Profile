import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "REST API для E-Commerce",
    description: "Масштабируемый backend с микросервисной архитектурой, обработкой платежей и системой уведомлений",
    image: "https://images.unsplash.com/photo-1596167175550-19b780c8b461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBkZXZlbG9wbWVudCUyMGJhY2tlbmR8ZW58MXx8fHwxNzYwODc4MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Система аналитики данных",
    description: "Backend для обработки и анализа больших объемов данных с real-time агрегацией",
    image: "https://images.unsplash.com/photo-1620722664104-d4b8a0c5b556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHBvc3RncmVzcWx8ZW58MXx8fHwxNzYwODc4MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Django", "PostgreSQL", "Celery"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Микросервисная архитектура",
    description: "Распределенная система из 6+ микросервисов с message broker и service discovery",
    image: "https://images.unsplash.com/photo-1676030789467-a097e2291bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NlcnZpY2VzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDg3ODI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Docker", "RabbitMQ", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Облачная инфраструктура",
    description: "Настройка CI/CD pipeline, мониторинга и автоматизации развертывания",
    image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNlcnZlciUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2MDg3ODI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Docker", "GitLab CI", "Nginx", "Prometheus"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "API Gateway с аутентификацией",
    description: "Централизованный шлюз с JWT, OAuth2 и rate limiting для микросервисов",
    image: "https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzYwNzk0NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "FastAPI", "JWT", "Redis"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Admin панель для управления",
    description: "Полноценная админ панель с React frontend и Python backend для управления системой",
    image: "https://images.unsplash.com/photo-1615285307672-09b361d7c61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NjA3NzA4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Python", "PostgreSQL", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900 dark:text-white">Проекты</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Backend проекты и архитектурные решения. От REST API до микросервисных систем.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
