import React from "react";
import { useAuth } from "../../context";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import "./Address.css";

function Address() {
  const {
    authState: { user },
  } = useAuth();
  return (
    <main className="address">
      <h1 className="text-lg font-bold">Select a delivery address</h1>
      <p className="text-md">
        Is the address you'd like to use displayed below? If so, click the
        corresponding "Deliver to this address" button. Or you can enter a new
        delivery address.
      </p>
      <hr />
      <section className="flex-row flex-wrap address-list">
        {user.address?.length > 0 &&
          user.address?.map((item) => (
            <AddressCard key={item.addressId} address={item} />
          ))}
      </section>
      <hr />
      <section>
        <h2 className="text-lg font-bold">Add a new address</h2>
        <AddressForm />
      </section>
    </main>
  );
}

export default Address;
