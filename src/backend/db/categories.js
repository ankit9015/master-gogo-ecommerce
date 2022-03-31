import { v4 as uuid } from "uuid";
import women from "../../images/categories/women.png";
import men from "../../images/categories/men.png";
import boys from "../../images/categories/boys.png";
import girls from "../../images/categories/girls.png";
import unisex from "../../images/categories/unisex.png";

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    img: men,
  },
  {
    _id: uuid(),
    categoryName: "women",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    img: women,
  },
  {
    _id: uuid(),
    categoryName: "boys",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    img: boys,
  },
  {
    _id: uuid(),
    categoryName: "girls",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    img: girls,
  },
  {
    _id: uuid(),
    categoryName: "unisex",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    img: unisex,
  },
];
