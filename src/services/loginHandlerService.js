import React from "react";
import axios from "axios";
import { useToast } from "../context";

const loginHandlerService = async ({ email, password }) => {
  try {
    const response = await axios.post("/api/auth/login", { email, password });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export { loginHandlerService };
