import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    name: "Men's Black Jacket",
    categoryName: "men",
    ratings: 4,
    price: 5000,
    discountedPrice: 4000,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./men-black-jacket.png",
  },
  {
    _id: uuid(),
    name: "Women's Black Jacket",
    categoryName: "women",
    ratings: 4,
    price: 5000,
    discountedPrice: 4000,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./women-black-jacket.jpg",
  },
  {
    _id: uuid(),
    name: "Men's Black Trouser",
    categoryName: "men",
    ratings: 3,
    price: 4000,
    discountedPrice: 3000,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./men-trouser.jpg",
  },
  {
    _id: uuid(),
    name: "Women's Black Trouser",
    categoryName: "women",
    ratings: 3,
    price: 4000,
    discountedPrice: 3000,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./women-trouser.jpg",
  },
  {
    _id: uuid(),
    name: "Men's Black shirt",
    categoryName: "men",
    ratings: 2,
    price: 2000,
    discountedPrice: 1500,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./men-black-shirt.jpg",
  },
  {
    _id: uuid(),
    name: "Women's Black shirt",
    categoryName: "women",
    ratings: 2,
    price: 2000,
    discountedPrice: 1500,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./women-black-shirt.jpg",
  },
  {
    _id: uuid(),
    name: "Boy's Green Jacket",
    categoryName: "boys",
    ratings: 3,
    price: 5000,
    discountedPrice: 4000,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./boy-green-jacket.jpg",
  },
  {
    _id: uuid(),
    name: "Girl's Green Jacket",
    categoryName: "girls",
    ratings: 3,
    price: 5000,
    discountedPrice: 4000,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./girl-green-jacket.jpg",
  },
  {
    _id: uuid(),
    name: "Boy's Red t-shirt",
    categoryName: "boys",
    ratings: 3,
    price: 3000,
    discountedPrice: 1000,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./boy-red-tshirt.jpg",
  },
  {
    _id: uuid(),
    name: "Girl's Red t-shirt",
    categoryName: "girls",
    ratings: 3,
    price: 5000,
    discountedPrice: 4000,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./girl-red-tshirt.jpg",
  },

  {
    _id: uuid(),
    name: "Unisex Black Jacket",
    categoryName: "unisex",
    ratings: 5,
    price: 5000,
    discountedPrice: "2000",
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./men-black-jacket.png",
  },
  {
    _id: uuid(),
    name: "Men's Black shirt",
    categoryName: "men",
    ratings: 4,
    price: 5000,
    discountedPrice: 400,
    discount: "20%",
    inCart: false,
    inWishList: false,
    img: "./men-black-shirt.jpg",
  },
];
