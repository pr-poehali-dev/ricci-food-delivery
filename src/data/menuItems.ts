import { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Спагетти Карбонара",
    description:
      "Классическая паста с беконом, яйцом, сыром пармезан и чёрным перцем",
    price: 680,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d30e?w=400",
    category: "pasta",
    ingredients: ["спагетти", "бекон", "яйца", "пармезан", "чёрный перец"],
    isPopular: true,
  },
  {
    id: "2",
    name: "Пицца Маргарита",
    description:
      "Тонкое тесто с томатным соусом, моцареллой и свежим базиликом",
    price: 850,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400",
    category: "pizza",
    ingredients: ["тесто", "томатный соус", "моцарелла", "базилик"],
    isPopular: true,
  },
  {
    id: "3",
    name: "Ризотто с белыми грибами",
    description: "Кремовый ризотто с белыми грибами и пармезаном",
    price: 720,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400",
    category: "risotto",
    ingredients: ["рис арборио", "белые грибы", "пармезан", "белое вино"],
  },
  {
    id: "4",
    name: "Лазанья Болоньезе",
    description: "Многослойная лазанья с мясным соусом болоньезе и бешамель",
    price: 790,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400",
    category: "pasta",
    ingredients: ["паста", "мясной фарш", "томаты", "бешамель", "пармезан"],
  },
  {
    id: "5",
    name: "Тирамису",
    description: "Классический итальянский десерт с маскарпоне и кофе",
    price: 420,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
    category: "dessert",
    ingredients: ["маскарпоне", "савоярди", "кофе", "какао"],
  },
  {
    id: "6",
    name: "Пицца Кватро Формаджи",
    description:
      "Пицца с четырьмя видами сыра: моцарелла, горгонзола, пармезан, пекорино",
    price: 920,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    category: "pizza",
    ingredients: ["тесто", "моцарелла", "горгонзола", "пармезан", "пекорино"],
  },
];
