import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Trophy } from "lucide-react";

interface Winner {
  id: number;
  name: string;
  avatar: string;
  prize: string;
  date: string;
  city: string;
}

const winners: Winner[] = [
  {
    id: 1,
    name: "Александр М.",
    avatar: "AM",
    prize: "iPhone 15 Pro Max",
    date: "15 октября 2025",
    city: "Москва"
  },
  {
    id: 2,
    name: "Екатерина С.",
    avatar: "ЕС",
    prize: "MacBook Pro 16",
    date: "12 октября 2025",
    city: "Санкт-Петербург"
  },
  {
    id: 3,
    name: "Дмитрий К.",
    avatar: "ДК",
    prize: "PlayStation 5",
    date: "08 октября 2025",
    city: "Казань"
  },
  {
    id: 4,
    name: "Ольга Н.",
    avatar: "ОН",
    prize: "Путевка на Мальдивы",
    date: "05 октября 2025",
    city: "Екатеринбург"
  },
  {
    id: 5,
    name: "Михаил Л.",
    avatar: "МЛ",
    prize: "Электросамокат",
    date: "01 октября 2025",
    city: "Новосибирск"
  },
  {
    id: 6,
    name: "Анна В.",
    avatar: "АВ",
    prize: "Apple Watch Ultra",
    date: "28 сентября 2025",
    city: "Краснодар"
  }
];

const avatarColors = [
  "bg-purple-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-indigo-500"
];

export function RecentWinners() {
  return (
    <section id="winners" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="mb-4">Недавние победители</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Каждую неделю мы объявляем новых счастливчиков. Следующим можешь стать ты!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {winners.map((winner, index) => (
            <Card key={winner.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Avatar className={`${avatarColors[index % avatarColors.length]} w-12 h-12 flex items-center justify-center text-white shrink-0`}>
                  {winner.avatar}
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="truncate">{winner.name}</h4>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {winner.city}
                    </Badge>
                  </div>
                  <p className="text-purple-600 mb-1">{winner.prize}</p>
                  <p className="text-sm text-gray-500">{winner.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 md:p-12 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
            <div className="relative z-10">
              <h3 className="text-white mb-3">Стань следующим победителем!</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Тысячи людей уже выиграли призы своей мечты. Попробуй свою удачу в одном из наших розыгрышей
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors">
                  Смотреть розыгрыши
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg transition-colors">
                  Все победители
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
