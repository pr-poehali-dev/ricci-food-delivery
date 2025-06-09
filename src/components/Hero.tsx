import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Вкус настоящей
            <span className="text-amber-600 block">Италии</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Доставляем аутентичные итальянские блюда прямо к вашему столу.
            Свежие ингредиенты, традиционные рецепты, атмосфера Тосканы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-lg px-8"
              onClick={scrollToMenu}
            >
              <Icon name="UtensilsCrossed" size={20} className="mr-2" />
              Смотреть меню
            </Button>

            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Icon name="Clock" size={18} className="mr-1 text-amber-500" />
                <span className="text-sm">30-45 мин</span>
              </div>
              <div className="flex items-center">
                <Icon name="Truck" size={18} className="mr-1 text-amber-500" />
                <span className="text-sm">Бесплатно от 1500₽</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Icon name="Chef" className="text-amber-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Шеф из Италии</h3>
              <p className="text-sm text-gray-600">
                Аутентичные рецепты от Марко Росси
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Icon name="Leaf" className="text-amber-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Свежие продукты</h3>
              <p className="text-sm text-gray-600">
                Ингредиенты прямо с фермерских хозяйств
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Icon name="Heart" className="text-amber-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">С любовью</h3>
              <p className="text-sm text-gray-600">
                Каждое блюдо готовится с душой
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
