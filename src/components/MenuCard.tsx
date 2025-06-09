import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MenuItem } from "@/types";
import { useCart } from "@/hooks/useCart";
import Icon from "@/components/ui/icon";

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard = ({ item }: MenuCardProps) => {
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.isPopular && (
          <Badge className="absolute top-2 right-2 bg-amber-500">
            <Icon name="Star" size={12} className="mr-1" />
            Популярное
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {item.ingredients.slice(0, 3).map((ingredient) => (
            <Badge
              key={ingredient}
              variant="secondary"
              className="text-xs bg-amber-50 text-amber-700"
            >
              {ingredient}
            </Badge>
          ))}
          {item.ingredients.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{item.ingredients.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-amber-600">
            {item.price}₽
          </span>
          <Button
            onClick={() => addItem(item)}
            className="bg-amber-500 hover:bg-amber-600"
          >
            <Icon name="Plus" size={16} className="mr-1" />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
