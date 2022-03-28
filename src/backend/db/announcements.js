import { v4 as uuid } from "uuid";
import women from "../../images/categories/women.png";
import men from "../../images/categories/men.png";
import boys from "../../images/categories/boys.png";
import girls from "../../images/categories/girls.png";
import unisex from "../../images/categories/unisex.png";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const newStocks = [
  {
    _id: uuid(),
    stockType: "summer collection",
    categoryName: "men",
    description:
    "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    img: men,
  },
  {
    _id: uuid(),
    stockType: "summer collection",

    categoryName: "women",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      img: women
  },
  {
    _id: uuid(),
    stockType: "summer collection",
    categoryName: "boys",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      img: boys
    },
  {
    _id: uuid(),
    stockType: "summer collection",
    categoryName: "girls",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      img: girls},
  {
    _id: uuid(),
    stockType: "summer collection",
    categoryName: "unisex",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      img: unisex},
];
