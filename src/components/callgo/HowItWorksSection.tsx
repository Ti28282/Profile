import { UserPlus, Link as LinkIcon, Phone, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Зарегистрируйтесь',
    description: 'Создайте аккаунт за 30 секунд, используя ваш email адрес',
    step: '01'
  },
  {
    icon: LinkIcon,
    title: 'Создайте комнату',
    description: 'Сгенерируйте уникальную ссылку для звонка и поделитесь с участниками',
    step: '02'
  },
  {
    icon: Phone,
    title: 'Начните звонок',
    description: 'Подключитесь одним кликом и наслаждайтесь качественным звуком',
    step: '03'
  },
  {
    icon: MessageCircle,
    title: 'Общайтесь свободно',
    description: 'Без ограничений времени, без скачивания приложений',
    step: '04'
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 dark:text-white mb-4">
            Как это работает
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Всего 4 простых шага отделяют вас от идеального звонка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" style={{ top: '64px' }} />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex mb-6">
                    {/* Step number background */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center z-10">
                      <span className="text-white">{step.step}</span>
                    </div>
                    
                    {/* Icon container */}
                    <div className="bg-white dark:bg-gray-800 border-4 border-gray-100 dark:border-gray-700 p-4 rounded-2xl shadow-lg relative z-20">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
