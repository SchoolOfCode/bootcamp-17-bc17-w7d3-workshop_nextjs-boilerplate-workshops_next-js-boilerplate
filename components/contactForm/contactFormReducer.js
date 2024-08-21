"use client";
import { useReducer } from "react";

//initial state
const formData = {
  fullName: "",
  postcode: "",
  addressNumber: "",
  cityName: "",
  phoneNumber: "",
  emailAddress: "",
};

//build reducer
function reducer(state, action) {
  if (action.type === "GET_INPUT_VALUE") {
    console.log(state);
    console.log(action);
    return {
      ...state,
      [action.field]: action.value,
    };
  }
  return state;
}

export default function ContactForm() {
  // init reducer
  const [state, dispatch] = useReducer(reducer, formData);

  // get input value
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "GET_INPUT_VALUE", field: name, value: value });
    console.log(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      state.fullName &&
      state.postcode &&
      state.addressNumber &&
      state.cityName &&
      state.phoneNumber &&
      state.emailAddress
    ) {
      console.log("submitted:", state);
    } else {
      console.log("the form is incomplete");
    }
  }

  return (
    <>
      <h2>Design Booking</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information:</legend>
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={state.fullName}
              onChange={handleChange}
            />
          </label>
          <label>
            Postcode
            <input
              type="text"
              name="postcode"
              value={state.postcode}
              onChange={handleChange}
            />
          </label>
          <label>
            House/Flat Number and Street Name
            <input
              type="text"
              name="addressNumber"
              value={state.addressNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            City
            <input
              type="text"
              name="cityName"
              value={state.cityName}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Contact Information:</legend>
          <label>
            Phone Number
            <input
              type="number"
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="emailAddress"
              value={state.emailAddress}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
}
