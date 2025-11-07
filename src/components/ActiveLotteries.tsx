import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Users, Ticket } from "lucide-react";

interface Lottery {
  id: number;
  title: string;
  prize: string;
  image: string;
  ticketPrice: number;
  totalTickets: number;
  soldTickets: number;
  endsIn: string;
  status: "active" | "ending-soon";
}

const lotteries: Lottery[] = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    prize: "Смартфон премиум класса",
    image: "https://images.unsplash.com/photo-1760604359549-8921b6139a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbWFydHBob25lJTIwZGV2aWNlfGVufDF8fHx8MTc2MDg3MzMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ticketPrice: 100,
    totalTickets: 500,
    soldTickets: 420,
    endsIn: "2 дня",
    status: "ending-soon"
  },
  {
    id: 2,
    title: "Спортивный автомобиль",
    prize: "Роскошный суперкар",
    image: "https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBsdXh1cnl8ZW58MXx8fHwxNzYwODczMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ticketPrice: 500,
    totalTickets: 1000,
    soldTickets: 650,
    endsIn: "5 дней",
    status: "active"
  },
  {
    id: 3,
    title: "Игровой ноутбук",
    prize: "Мощный геймерский лэптоп",
    image: "https://images.unsplash.com/photo-1620705914357-a9d11009e068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsYXB0b3AlMjBtb2Rlcm58ZW58MXx8fHwxNzYwODczMzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ticketPrice: 150,
    totalTickets: 600,
    soldTickets: 380,
    endsIn: "7 дней",
    status: "active"
  },
  {
    id: 4,
    title: "Премиум наушники",
    prize: "Высококачественный звук",
    image: "https://images.unsplash.com/photo-1737885197946-6d9d79dade89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwcHJlbWl1bSUyMGF1ZGlvfGVufDF8fHx8MTc2MDg3MzMwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ticketPrice: 50,
    totalTickets: 400,
    soldTickets: 280,
    endsIn: "3 дня",
    status: "active"
  },
  {
    id: 5,
    title: "Тропический отдых",
    prize: "7 дней на райском острове",
    image: "https://images.unsplash.com/photo-1579077926357-365f07b70b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyb3BpY2FsJTIwYmVhY2h8ZW58MXx8fHwxNzYwNzgzMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ticketPrice: 200,
    totalTickets: 800,
    soldTickets: 520,
    endsIn: "10 дней",
    status: "active"
  },
  {
    id: 6,
    title: "Apple Watch Ultra",
    prize: "Умные часы для спорта",
    image: "https://images.unsplash.com/photo-1532435109783-fdb8a2be0baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZml0bmVzc3xlbnwxfHx8fDE3NjA4MjYzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ticketPrice: 80,
    totalTickets: 450,
    soldTickets: 190,
    endsIn: "12 дней",
    status: "active"
  }
];

export function ActiveLotteries() {
  return (
    <section id="lotteries" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Активные розыгрыши</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выбери приз своей мечты и купи билет. Чем больше билетов, тем выше шанс на победу!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lotteries.map((lottery) => (
            <Card key={lottery.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={lottery.image}
                  alt={lottery.title}
                  className="w-full h-full object-cover"
                />
                {lottery.status === "ending-soon" && (
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                    Скоро завершится
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-1">{lottery.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{lottery.prize}</p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Продано билетов</span>
                    <span>{lottery.soldTickets} / {lottery.totalTickets}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${(lottery.soldTickets / lottery.totalTickets) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{lottery.endsIn}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{lottery.soldTickets}</span>
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl">₽{lottery.ticketPrice}</div>
                    <div className="text-xs text-gray-500">за билет</div>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 gap-2">
                    <Ticket className="w-4 h-4" />
                    Купить билет
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Показать все розыгрыши
          </Button>
        </div>
      </div>
    </section>
  );
}
