import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FolderKanban, Wrench, Mail, Eye } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

export function AdminDashboard() {
  const { projects, skillCategories, messages } = useAdmin();
  const unreadMessages = messages.filter(m => !m.read).length;

  const stats = [
    {
      title: 'Всего проектов',
      value: projects.length,
      icon: FolderKanban,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Категорий навыков',
      value: skillCategories.length,
      icon: Wrench,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Новых сообщений',
      value: unreadMessages,
      icon: Mail,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Всего сообщений',
      value: messages.length,
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const recentProjects = projects.slice(0, 3);
  const recentMessages = messages.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Добро пожаловать в админ панель!</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Управляйте содержимым вашего портфолио
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                    <p className="text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Content */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Последние проекты</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 dark:text-white truncate">
                      {project.title}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 truncate">
                      {project.tags.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Последние сообщения</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 rounded-lg ${
                    message.read
                      ? 'bg-gray-50 dark:bg-gray-800'
                      : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-gray-900 dark:text-white">
                      {message.name}
                    </p>
                    {!message.read && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                        Новое
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {message.message}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 mt-2">
                    {new Date(message.date).toLocaleDateString('ru-RU')}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
