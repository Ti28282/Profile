import { UserPlus, Ticket, Trophy, Gift } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Регистрация",
    description: "Создайте бесплатный аккаунт на платформе Каспер"
  },
  {
    icon: Ticket,
    title: "Купите билет",
    description: "Выберите розыгрыш и приобретите один или несколько билетов"
  },
  {
    icon: Trophy,
    title: "Ждите розыгрыша",
    description: "Розыгрыш проходит честно и открыто в прямом эфире"
  },
  {
    icon: Gift,
    title: "Получите приз",
    description: "Победитель получает приз с доставкой по всей России"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Как это работает</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Участвовать в розыгрышах просто и безопасно. Всего 4 простых шага до вашей мечты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile, shown on desktop except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20" />
              )}

              <div className="relative text-center">
                {/* Icon circle */}
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Step number */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 bg-white px-2">
                  <span className="text-4xl opacity-10">{index + 1}</span>
                </div>

                <h3 className="mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="mb-1">Безопасно</h4>
              <p className="text-sm text-gray-600">Защищенные платежи и данные</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚖️</div>
              <h4 className="mb-1">Честно</h4>
              <p className="text-sm text-gray-600">Прозрачные розыгрыши в прямом эфире</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="mb-1">Гарантия</h4>
              <p className="text-sm text-gray-600">100% доставка призов победителям</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
