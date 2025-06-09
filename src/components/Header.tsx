import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { AuthModal } from "@/components/AuthModal";
import { CartModal } from "@/components/CartModal";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

export const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const { user, logout } = useAuth();
  const { itemsCount } = useCart();

  return (
    <header className="bg-white shadow-sm border-b-2 border-amber-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-full">
            <Icon name="Chef" className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-amber-600">Ricci</h1>
            <p className="text-xs text-gray-600">Итальянская кухня</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#menu"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Меню
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            О нас
          </a>
          <a
            href="#contacts"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCartModal(true)}
            className="relative"
          >
            <Icon name="ShoppingCart" size={18} />
            {itemsCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-amber-500 text-white">
                {itemsCount}
              </Badge>
            )}
          </Button>

          {user ? (
            <div className="flex items-center space-x-2">
              <div className="text-sm">
                <p className="font-medium">{user.name}</p>
                <p className="text-amber-600">⭐ {user.loyaltyPoints} баллов</p>
              </div>
              <Button variant="ghost" size="sm" onClick={logout}>
                <Icon name="LogOut" size={18} />
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => setShowAuthModal(true)}
              className="bg-amber-500 hover:bg-amber-600"
            >
              Войти
            </Button>
          )}
        </div>
      </div>

      <AuthModal open={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <CartModal open={showCartModal} onClose={() => setShowCartModal(false)} />
    </header>
  );
};
