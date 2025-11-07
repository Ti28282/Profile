import { Check, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';

interface PricingProps {
  onSelectPlan: (plan: string) => void;
}

const plans = [
  {
    name: 'Бесплатный',
    price: '0',
    description: 'Для личного использования',
    features: [
      'До 10 участников в звонке',
      'HD качество звука',
      'Базовое шумоподавление',
      'Без ограничения времени',
      'Веб-доступ',
      'Сквозное шифрование'
    ],
    popular: false,
    gradient: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Профессиональный',
    price: '490',
    description: 'Для команд и бизнеса',
    features: [
      'До 50 участников в звонке',
      'Premium HD аудио',
      'Продвинутое шумоподавление',
      'Запись звонков',
      'Приоритетная поддержка',
      'Расширенная аналитика',
      'Интеграции с календарями',
      'Брендированные комнаты'
    ],
    popular: true,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Корпоративный',
    price: 'Custom',
    description: 'Для больших организаций',
    features: [
      'До 100 участников в звонке',
      'Максимальное качество',
      'AI шумоподавление',
      'Неограниченные записи',
      'Персональный менеджер',
      'SLA гарантии',
      'API доступ',
      'Dedicated сервера',
      'SSO интеграция'
    ],
    popular: false,
    gradient: 'from-purple-500 to-pink-600'
  }
];

export function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 dark:text-white mb-4">
            Прозрачные тарифы
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Выберите план, который подходит именно вам. Всегда можно начать с бесплатного.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 ${
                plan.popular 
                  ? 'border-blue-500 dark:border-blue-600 shadow-xl scale-105' 
                  : 'border-gray-200 dark:border-gray-800'
              } hover:shadow-lg transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className={`flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r ${plan.gradient} text-white shadow-lg`}>
                    <Zap className="w-4 h-4" />
                    <span>Популярный</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-10">
                <h3 className="text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price === 'Custom' ? (
                    <span className="text-gray-900 dark:text-white">По запросу</span>
                  ) : (
                    <>
                      <span className="text-gray-900 dark:text-white">{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400">₽/мес</span>
                    </>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90`
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.price === '0' ? 'Начать бесплатно' : plan.price === 'Custom' ? 'Связаться с нами' : 'Выбрать план'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
