import { Button } from "./ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Честные розыгрыши каждую неделю</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6">
            Выигрывай мечту с <span className="text-yellow-300">Каспер</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Участвуй в розыгрышах премиальных призов: автомобили, гаджеты, путешествия и многое другое
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 gap-2 px-8"
            >
              Смотреть розыгрыши
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8"
            >
              Как это работает
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl mb-2">250+</div>
              <div className="text-white/80 text-sm md:text-base">Призов разыграно</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">50K+</div>
              <div className="text-white/80 text-sm md:text-base">Участников</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">₽15M+</div>
              <div className="text-white/80 text-sm md:text-base">Сумма призов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
