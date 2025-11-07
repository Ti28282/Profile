import { Phone, Mic, Users, Zap } from 'lucide-react';
import { Button } from '../ui/button';

interface CallGoHeroProps {
  onGetStarted: () => void;
}

export function CallGoHero({ onGetStarted }: CallGoHeroProps) {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400">Кристально чистый звук</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-gray-900 dark:text-white mb-6">
            Аудио-звонки нового поколения
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            CallGo — современная платформа для аудио-связи. Подключайтесь к коллегам, друзьям и близким с высочайшим качеством звука. Просто, быстро, надежно.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Начать бесплатно
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById('how-it-works');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Узнать больше
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <Mic className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">HD аудио</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300">До 100 участников</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-gray-700 dark:text-gray-300">Мгновенное подключение</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
