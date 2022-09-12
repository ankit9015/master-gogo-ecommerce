import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useCart, useToast } from "../../context";
import { removeAddressService } from "../../services/address";
import "./Address.css";

function AddressCard({ address }) {
  const { cartDispatch, cartState } = useCart();
  const { authState, setAuthState } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  return (
    <div className="address-wrapper text-md flex-column">
      <p>{address.name}</p>
      <p>
        +{address.phoneCode} {address.phone}
      </p>
      <p>{address.house}</p>
      <p>{address.area}</p>
      <p>
        {address.city}, {address.state.name} - {address.pincode}
      </p>
      <p>{address.country.name}</p>
      <button
        className="button button-primary text-md"
        onClick={() => {
          cartDispatch({
            type: "CHANGE-ADDRESS",
            payload: { address: address },
          });
          navigate("/cart");
        }}
      >
        Deliver to this address
      </button>
      <button
        className="button text-md"
        onClick={() => {
          removeAddressService({
            address: address,
            authToken: authState.authToken,
          }).then(() => {
            setAuthState({
              ...authState,
              user: {
                ...authState.user,
                address: authState.user.address.filter(
                  (item) => item.addressId !== address.addressId
                ),
              },
            });
            addToast({ content: "Address removed", type: "SUCCESS" });
            if (cartState.address?.addressId === address?.addressId) {
              cartDispatch({
                type: "CHANGE-ADDRESS",
                payload: { address: null },
              });
            }
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default AddressCard;
