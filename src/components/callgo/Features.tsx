import { Shield, Zap, Globe, Lock, Clock, Headphones } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const features = [
  {
    icon: Zap,
    title: 'Мгновенное подключение',
    description: 'Начинайте звонки за секунды без сложных настроек и установки приложений.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Headphones,
    title: 'HD качество звука',
    description: 'Кристально чистый звук благодаря передовым аудио-кодекам и шумоподавлению.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Защищенные звонки',
    description: 'Сквозное шифрование гарантирует конфиденциальность ваших разговоров.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Работает везде',
    description: 'Подключайтесь из любой точки мира через браузер на любом устройстве.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Без ограничений времени',
    description: 'Разговаривайте столько, сколько нужно — без лимитов на бесплатном тарифе.',
    gradient: 'from-red-500 to-rose-500'
  },
  {
    icon: Lock,
    title: 'Приватные комнаты',
    description: 'Создавайте защищенные паролем аудио-комнаты для вашей команды.',
    gradient: 'from-indigo-500 to-violet-500'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 dark:text-white mb-4">
            Всё для идеальных звонков
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            CallGo объединяет простоту использования с профессиональным качеством связи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
