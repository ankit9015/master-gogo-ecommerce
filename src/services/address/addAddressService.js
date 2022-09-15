import axios from "axios";
import React from "react";

async function addAddressService({ address, authToken }) {
  try {
    const res = await axios.post(
      "api/user/address",
      {
        address,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default addAddressService;
