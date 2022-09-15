import React, { useMemo, useState } from "react";
import "./Address.css";
import { Country, State, City } from "country-state-city";
import addAddressService from "../../services/address/addAddressService";
import { useAuth, useToast } from "../../context";

function AddressForm() {
  const defaultFormData = {
    name: "",
    house: "",
    area: "",
    city: "",
    state: { code: "", name: "" },
    country: { code: "IN", name: "India" },
    phoneCode: "91",
    phone: "",
    pincode: "",
  };
  const [formData, setFormData] = useState(defaultFormData);

  const { authState, setAuthState } = useAuth();
  const { addToast } = useToast();

  const countryList = useMemo(() => Country.getAllCountries(), []);
  const stateList = useMemo(
    () => State.getStatesOfCountry(formData.country.code),
    [formData.country.code]
  );
  const cityList = useMemo(
    () => City.getCitiesOfState(formData.country.code, formData.state.code),
    [formData.country.code, formData.state.code]
  );

  const submitHandler = (e) => {
    e.preventDefault();
    addAddressService({
      address: formData,
      authToken: authState.authToken,
    }).then((res) => {
      addToast({ content: "New address added", type: "SUCCESS" });

      setAuthState({
        ...authState,
        user: {
          ...authState.user,
          address: [...authState.user.address, formData],
        },
      });
      setFormData(defaultFormData);
    });
  };
  return (
    <form className="text-md flex-column p-m address-form">
      <label htmlFor="name" className="">
        Full name
      </label>
      <input
        required
        className="text-md"
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label htmlFor="phone" className="">
        Mobile number
      </label>
      <div className="flex-row gap-5">
        <span className="phone-code">+{formData.phoneCode}</span>
        <input
          required
          className="text-md"
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <label htmlFor="country" className="">
        Country
      </label>
      <select
        required
        className="text-md"
        id="country"
        name="country"
        onChange={(e) => {
          const val = e.target.value.split(",");
          setFormData({
            ...formData,
            country: { code: val[0], name: val[1] },
            phoneCode: val[2],
          });
        }}
        defaultValue={`${formData.country.code}, ${formData.country.name}, ${formData.phoneCode}`}
      >
        {countryList.map((country) => (
          <option
            key={country.isoCode}
            value={`${country.isoCode}, ${country.name}, ${country.phonecode}`}
          >
            {country.name}
          </option>
        ))}
      </select>
      <label htmlFor="state" className="">
        State
      </label>
      <select
        required
        className="text-md"
        id="state"
        name="state"
        onChange={(e) => {
          const val = e.target.value.split(",");
          setFormData({
            ...formData,
            state: { code: val[0], name: val[1] },
          });
        }}
        defaultValue=""
      >
        <option key={"state-1"} value="">
          Select
        </option>
        {stateList?.map((state) => (
          <option key={state.isoCode} value={`${state.isoCode},${state.name}`}>
            {state.name}
          </option>
        ))}
      </select>
      <label htmlFor="city" className="">
        City{" "}
      </label>
      <select
        required
        className="text-md"
        id="city"
        name="city"
        onChange={(e) => {
          const val = e.target.value;
          setFormData({
            ...formData,
            city: val,
          });
        }}
        disabled={!(formData.country.code && formData.state.code)}
      >
        <option key={"city-1"} value="">
          Select
        </option>
        {cityList?.map((city, idx) => (
          <option key={`city-${idx}`} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      <label id="house" className="">
        Flat, House no., Building, Company, Apartment
      </label>
      <input
        required
        className="text-md"
        id="house"
        name="house"
        type="text"
        value={formData.house}
        onChange={(e) => setFormData({ ...formData, house: e.target.value })}
      />

      <label id="area" className="">
        Area, Street, Sector, Village
      </label>
      <input
        required
        className="text-md"
        id="area"
        name="area"
        type="text"
        value={formData.area}
        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
      />

      <label className="">
        <p>Pin Code</p>
        <input
          required
          className="text-md"
          type="number"
          value={formData.pincode}
          onChange={(e) =>
            setFormData({ ...formData, pincode: e.target.value })
          }
        />
      </label>
      <button
        className="button button-primary text-md"
        onClick={(e) => submitHandler(e)}
      >
        Add new address
      </button>
    </form>
  );
}

export default AddressForm;
