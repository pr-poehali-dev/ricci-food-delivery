import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-full">
                <Icon name="Chef" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400">Ricci</h3>
                <p className="text-xs text-gray-400">Итальянская кухня</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Доставляем аутентичные итальянские блюда с 2020 года. Вкус
              настоящей Италии у вас дома.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                <span>info@ricci-delivery.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                <span>Москва, ул. Итальянская, 15</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                <span>Ежедневно 10:00-23:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Информация</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>О нас</div>
              <div>Доставка и оплата</div>
              <div>Программа лояльности</div>
              <div>Вакансии</div>
              <div>Франшиза</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Мы в соцсетях</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-lg hover:bg-amber-500 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-lg hover:bg-amber-500 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-lg hover:bg-amber-500 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Следите за новостями и акциями в наших социальных сетях
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 Ricci. Все права защищены. Сделано с ❤️ для любителей
            итальянской кухни
          </p>
        </div>
      </div>
    </footer>
  );
};
