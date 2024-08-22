"use client";
import { useState, useEffect, useReducer } from "react";

const initialState = {
  data: {
    fullName: { value: "", isValid: true },
    postCode: { value: "", isValid: true },
    address: { value: "", isValid: true },
    city: { value: "", isValid: true },
    phone: { value: "", isValid: true },
    email: { value: "", isValid: true },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: {
            ...state.data[action.field],
            value: action.value,
          },
        },
      };
    case "INPUT_CHECKED":
      console.log(state);
      if (state.data[action.field].value) {
        console.log("the field is provided");
        return {
          ...state,
          data: {
            ...state.data,
            [action.field]: {
              ...state.data[action.field],
              isValid: true,
            },
          },
        };
      } else {
        console.log("the field is empty");
        return {
          ...state,
          data: {
            ...state.data,
            [action.field]: {
              ...state.data[action.field],
              isValid: false,
            },
          },
        };
      }

    default:
      return state;
  }
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    dispatch({
      type: "SET_FIELD_VALUE",
      field: e.target.name,
      value: e.target.value,
    });
  }

  function handleTouch(e) {
    dispatch({
      type: "INPUT_CHECKED",
      field: e.target.name,
      value: true,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <>
      <h2 className="designBooking-title">Design Booking</h2>
      <form className="designBooking-form">
        <fieldset className="designBooking-fieldset">
          <legend className="designBooking-legend">
            Personal Information:
          </legend>
          <div className="designBooking-container">
            <label className="designBooking-label">
              Full Name
              <input
                type="text"
                name="fullName"
                // value={state.data.fullName.value}
                onChange={(event) => {
                  handleChange(event);
                }}
                onBlur={(event) => {
                  handleTouch(event);
                }}
              />
              {!state.data.fullName.isValid && (
                <span>the input is not valid</span>
              )}
            </label>
            <label className="designBooking-label">
              Postcode
              <input
                type="text"
                name="postCode"
                onChange={(event) => {
                  handleChange(event);
                }}
                onBlur={(event) => {
                  handleTouch(event);
                }}
              />
              {!state.data.postCode.isValid && (
                <span>the input is not valid</span>
              )}
            </label>

            <label className="designBooking-label">
              Address
              <input
                type="text"
                name="address"
                onChange={(event) => {
                  handleChange(event);
                }}
                onBlur={(event) => {
                  handleTouch(event);
                }}
              />
              {!state.data.address.isValid && (
                <span>the input is not valid</span>
              )}
            </label>

            <label className="designBooking-label">
              City
              <input
                type="text"
                name="city"
                onChange={(event) => {
                  handleChange(event);
                }}
                onBlur={(event) => {
                  handleTouch(event);
                }}
              />
              {!state.data.city.isValid && <span>the input is not valid</span>}
            </label>
          </div>
        </fieldset>
        <fieldset className="designBooking-fieldset">
          <legend className="designBooking-legend">Contact Information:</legend>
          <div className="designBooking-container">
            <label className="designBooking-label">
              Phone
              <input
                type="text"
                name="phone"
                onChange={(event) => {
                  handleChange(event);
                }}
                onBlur={(event) => {
                  handleTouch(event);
                }}
              />
              {!state.data.phone.isValid && <span>the input is not valid</span>}
            </label>
            <label className="designBooking-label">
              Email
              <input
                type="text"
                name="email"
                onChange={(event) => {
                  handleChange(event);
                }}
                onBlur={(event) => {
                  handleTouch(event);
                }}
              />
              {!state.data.email.isValid && <span>the input is not valid</span>}
            </label>
          </div>
        </fieldset>
        <button
          className="designBooking-button"
          type="submit"
          value="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}
