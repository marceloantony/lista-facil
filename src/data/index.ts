import { CategoryDataProps, ItemDataProps, ListDataProps } from "../@types/data-props";
import light from "../themes/light";

export const categories: CategoryDataProps[] = [
  {
    id: "1",
    name: "Bazar e Utilidades",
    iconName: "package-variant",
    iconLib: "MaterialCommunityIcons",
    color: light.COLORS.BAZUTILI,
  },

  {
    id: "2",
    name: "Bebidas",
    iconName: "wine-bottle",
    iconLib: "FontAwesome5",
    color: light.COLORS.DRINKS,
  },

  {
    id: "3",
    name: "Biscoitos",
    iconName: "cookie",
    iconLib: "MaterialCommunityIcons",
    color: light.COLORS.COOKIES,
  },

  {
    id: "4",
    name: "Carnes, Aves e Peixes",
    iconName: "food-steak",
    iconLib: "MaterialCommunityIcons",
    color: light.COLORS.MEATS,
  },

  {
    id: "5",
    name: "Condimentos e Conservas",
    iconName: "pepper-hot",
    iconLib: "FontAwesome5",
    color: light.COLORS.CONDCONS,
  },

  {
    id: "6",
    name: "Congelados e Resfriados",
    iconName: "snowflake-o",
    iconLib: "FontAwesome",
    color: light.COLORS.FROZEN,
  },

  {
    id: "7",
    name: "Doces e Sobremesas",
    iconName: "candy-outline",
    iconLib: "MaterialCommunityIcons",
    color: light.COLORS.CANDIES,
  },

  {
    id: "8",
    name: "Frios e Laticínios",
    iconName: "cheese",
    iconLib: "FontAwesome5",
    color: light.COLORS.DAIRY,
  },

  {
    id: "9",
    name: "Higiene Pessoal",
    iconName: "clean-hands",
    iconLib: "MaterialIcons",
    color: light.COLORS.HYGIENE,
  },

  {
    id: "10",
    name: "Horti-Fruti",
    iconName: "food-apple-outline",
    iconLib: "MaterialCommunityIcons",
    color: light.COLORS.HORTIFRUTI,
  },

  {
    id: "11",
    name: "Limpeza",
    iconName: "broom",
    iconLib: "MaterialCommunityIcons",
    color: light.COLORS.CLEANING,
  },

  {
    id: "12",
    name: "Mercearia",
    iconName: "local-restaurant",
    iconLib: "MaterialIcons",
    color: light.COLORS.GROCERY,
  },

  {
    id: "13",
    name: "Outros",
    iconName: "tagso",
    iconLib: "AntDesign",
    color: light.COLORS.OTHERS,
  },

  {
    id: "14",
    name: "Padaria",
    iconName: "baguette",
    iconLib: "MaterialCommunityIcons",
    color: light.COLORS.BAKERY,
  },

  {
    id: "15",
    name: "Pet",
    iconName: "paw",
    iconLib: "FontAwesome5",
    color: light.COLORS.PET,
  },
];

export const itemsExemple: ItemDataProps[] = [
  // {
  //   id: "1",
  //   title: "Fosforos",
  //   qtd: 2,
  //   value: 3.45,
  //   category: "1",
  // },
  // {
  //   id: "2",
  //   title: "Refrigerante",
  //   qtd: 4,
  //   value: 7.5,
  //   category: "2",
  // },
  // {
  //   id: "3",
  //   title: "Bolacha Recheada",
  //   qtd: 6,
  //   value: 3.1,
  //   category: "3",
  // },
  // {
  //   id: "4",
  //   title: "Bife Bovino",
  //   qtd: 2,
  //   value: 34.9,
  //   category: "4",
  // },
  // {
  //   id: "41",
  //   title: "Peito de Frago",
  //   qtd: 3,
  //   value: 22.9,
  //   category: "4",
  // },
  // {
  //   id: "5",
  //   title: "Molho de Tomate",
  //   qtd: 12,
  //   value: 2.75,
  //   category: "5",
  // },
  // {
  //   id: "6",
  //   title: "Batata Frita",
  //   qtd: 6,
  //   value: 16.9,
  //   category: "6",
  // },
  // {
  //   id: "61",
  //   title: "Nuggets",
  //   qtd: 6,
  //   value: 6.9,
  //   category: "6",
  // },
  // {
  //   id: "62",
  //   title: "Hambúrguer",
  //   qtd: 6,
  //   value: 9.9,
  //   category: "6",
  // },
  // {
  //   id: "7",
  //   title: "Chocolate",
  //   qtd: 3,
  //   value: 6.7,
  //   category: "7",
  // },
  // {
  //   id: "8",
  //   title: "Leite",
  //   qtd: 12,
  //   value: 6.8,
  //   category: "8",
  // },
  // {
  //   id: "9",
  //   title: "Sabonete",
  //   qtd: 5,
  //   value: 3.12,
  //   category: "9",
  // },
  // {
  //   id: "91",
  //   title: "Shampoo",
  //   qtd: 1,
  //   value: 22.69,
  //   category: "9",
  // },
  // {
  //   id: "10",
  //   title: "Batata",
  //   qtd: 3,
  //   value: 3.9,
  //   category: "10",
  // },
  {
    id: "11",
    title: "Sabão em Pó",
    qtd: 3,
    value: 8.4,
    category: "11",
  },
  {
    id: "12",
    title: "Arroz",
    qtd: 3,
    value: 6.95,
    category: "12",
  },
  {
    id: "13",
    title: "Tábua de Carne",
    qtd: 1,
    value: 17.75,
    category: "13",
  },
  {
    id: "14",
    title: "Pão Francês",
    qtd: 8,
    value: 0.6,
    category: "14",
  },
  {
    id: "15",
    title: "Sachê Ração",
    qtd: 5,
    value: 2.47,
    category: "15",
  },
  { id: "16", title: "Vinho", qtd: 1, value: 20, category: "2" },
];

export const listsExemple: ListDataProps[] = [
  { id: "1", title: "Carrefour", date: new Date(), value: 202.5 },
  { id: "2", title: "Pão de Açucar", date: new Date(), value: 602.75 },
  { id: "3", title: "Carrefour", date: new Date(), value: 210.25 },
  { id: "4", title: "Assaí", date: new Date(), value: 2020.2 },
  { id: "5", title: "Atacadão", date: new Date(), value: 1982.3 },
  { id: "6", title: "Extra", date: new Date(), value: 360.15 },
  { id: "7", title: "Shibata", date: new Date(), value: 85.9 },
  { id: "8", title: "Tenda", date: new Date(), value: 125.7 },
  { id: "9", title: "Rede Krill", date: new Date(), value: 496.35 },
  { id: "10", title: "Takahashi", date: new Date(), value: 965.4 },
  { id: "11", title: "Sondas", date: new Date(), value: 1506.6 },
];