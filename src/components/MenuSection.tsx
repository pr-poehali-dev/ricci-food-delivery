import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuCard } from "@/components/MenuCard";
import { menuItems } from "@/data/menuItems";

export const MenuSection = () => {
  const categories = [
    { id: "all", name: "Все блюда", icon: "🍽️" },
    { id: "pasta", name: "Паста", icon: "🍝" },
    { id: "pizza", name: "Пицца", icon: "🍕" },
    { id: "risotto", name: "Ризотто", icon: "🍚" },
    { id: "dessert", name: "Десерты", icon: "🍰" },
  ];

  const getFilteredItems = (category: string) => {
    if (category === "all") return menuItems;
    return menuItems.filter((item) => item.category === category);
  };

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наше меню</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждое блюдо - это путешествие в сердце Италии
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col items-center gap-1 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-xs hidden sm:block">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredItems(category.id).map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
