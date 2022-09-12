import axios from "axios";
import React from "react";

async function removeAddressService({ address, authToken }) {
  try {
    const res = await axios.delete(`api/user/address/${address.addressId}`, {
      headers: {
        authorization: authToken,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default removeAddressService;
