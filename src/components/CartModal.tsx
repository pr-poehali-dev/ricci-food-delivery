import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import Icon from "@/components/ui/icon";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export const CartModal = ({ open, onClose }: CartModalProps) => {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const { user } = useAuth();

  const loyaltyDiscount = user
    ? Math.min(total * 0.1, user.loyaltyPoints * 2)
    : 0;
  const finalTotal = total - loyaltyDiscount;

  if (items.length === 0) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Корзина пуста</DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <Icon
              name="ShoppingCart"
              size={48}
              className="mx-auto text-gray-300 mb-4"
            />
            <p className="text-gray-500">Добавьте блюда из меню</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Корзина
            <Button variant="ghost" size="sm" onClick={clearCart}>
              Очистить
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-3 p-3 border rounded-lg"
            >
              <img
                src={item.menuItem.image}
                alt={item.menuItem.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium">{item.menuItem.name}</h4>
                <p className="text-sm text-gray-500">{item.menuItem.price}₽</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Icon name="Minus" size={14} />
                </Button>
                <span className="font-medium min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Icon name="Plus" size={14} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  <Icon name="Trash2" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Сумма заказа:</span>
            <span>{total}₽</span>
          </div>

          {user && loyaltyDiscount > 0 && (
            <div className="flex justify-between text-amber-600">
              <span>Скидка по программе лояльности:</span>
              <span>-{loyaltyDiscount}₽</span>
            </div>
          )}

          <div className="flex justify-between font-bold text-lg">
            <span>Итого:</span>
            <span>{finalTotal}₽</span>
          </div>

          {user && (
            <div className="text-sm text-amber-600">
              <Icon name="Star" size={14} className="inline mr-1" />
              За этот заказ вы получите {Math.floor(finalTotal * 0.05)} баллов
            </div>
          )}
        </div>

        <Button className="w-full bg-amber-500 hover:bg-amber-600" size="lg">
          <Icon name="CreditCard" size={18} className="mr-2" />
          Оформить заказ
        </Button>
      </DialogContent>
    </Dialog>
  );
};
