import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Ankit",
    lastName: "Joshi",
    email: "ankitjoshi@gmail.com",
    password: "ankit123",
    phone: "9010203040",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        addressId: uuid(),
        name: "Ankit Joshi",
        house: "H.no. 201, Pushp Vihar",
        area: "Saket",
        city: "New Delhi",
        state: { code: "DL", name: "Delhi" },
        country: { code: "IN", name: "India" },
        phoneCode: "91",
        phone: "9010203040",
        pincode: "201003",
      },
    ],
  },
];
