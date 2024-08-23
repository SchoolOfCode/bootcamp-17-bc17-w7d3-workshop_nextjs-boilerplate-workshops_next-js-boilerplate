// ensure the component is rendered on client browser instead of server
"use client";

// importing useReducer hook from React.
import { useState, useEffect, useReducer } from "react";

// set a function to define the initial state
// define our initial values and what their validation status is at that initial state
const initialState = {
  data: {
    fullName: { value: "", isValid: true },
    postCode: { value: "", isValid: true },
    address: { value: "", isValid: true },
    city: { value: "", isValid: true },
    phone: { value: "", isValid: true },
    email: { value: "", isValid: true },
  },
  status: "Submit",
  disabled: "",
};

// reducer to manage how the state changes based on different user actions
function reducer(state, action) {
  switch (action.type) {
    // updates a specific field's value in the form as the user inputs
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
    // mark fields valid/invalid depending on input value of user
    case "INPUT_CHECKED":
      if (state.data[action.field].value) {
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
    // form status change to "submitting" when user clicks submit
    case "SUBMIT_STATUS":
      return {
        ...state,
        status: "Submitting",
      };
    // status to inform user of successful submit
    case "SUCCESS_STATUS":
      return {
        ...state,
        status: "Submitted",
      };
    // status to inform user of error in submit
    case "ERROR_STATUS":
      return {
        ...state,
        status: "Failed to submit",
      };
    // status to disable submit button to remove chance of multiple submit clicks
    case "DISABLE_SUBMIT":
      console.log("submit");
      return {
        ...state,
        disabled: "disabled",
      };
    default:
      return state;
  }
}

// fetch request from API to validate postcode
async function getPostcode() {
  fetch(
    `https://api.postcodes.io/postcodes/${"SE37SD"}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.status)
      return data.status;
    });
}

// main functional component of the the form
// useReducer to manage the form state
// take reducer function and initial state as the arguments
// dispatch function returned by useReducer to send actions to reducer
export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // handle changes in input fields 
  function handleChange(e) {
    if (e.target.name === "email" && !/\S+@\S+\.\S+/.test(e.target.value)) {
      return;
    }
    if (e.target.name === "phone" && !/^\d+$/.test(e.target.value)) {
      return;
    }; 
    dispatch({
      type: "SET_FIELD_VALUE",
      field: e.target.name,
      value: e.target.value,
    });
  }
  // validate when a user interacts with a clikc in input and clicks out
  function handleTouch(e) {
    if (!state.data[e.target.name.value]) {
      console.log("false");
      dispatch({
        type: "INPUT_CHECKED",
        field: e.target.name,
        value: false,
      });
    } else {
      console.log("true");
      dispatch({
        type: "INPUT_CHECKED",
        field: e.target.name,
        value: true,
      });
    }
  }
  // handle form submission
  function handleSubmit(e) {
    //prevent resubmission of form
    e.preventDefault();

    dispatch({ type: "VALIDATE_FORM" });

    // button status change to "submitting" with SUBMIT_STATUS action
    dispatch({
      type: "SUBMIT_STATUS",
    });

    // simulate a delay when user submits and is 'waiting for response'
    setTimeout(() => {
      getPostcode();

      if (
        !state.data.fullName.value ||
        !state.data.postCode.value ||
        !state.data.address.value ||
        !state.data.city.value ||
        !state.data.phone.value ||
        !state.data.email.value
      ) {
        dispatch({
          type: "ERROR_STATUS",
        });
      } else {
        dispatch({
          type: "SUCCESS_STATUS",
        });
        dispatch({
          type: "DISABLE_SUBMIT",
        });
      }
    }, 2000);
  }

  // JSX structure to render the form in UI
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
              {/* conditional validation messages for each user input */}
              {!state.data.fullName.isValid && (
                <span>The input is not valid</span>
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
                <span>The postcode is not valid</span>
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
                <span>The input is not valid</span>
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
              {!state.data.city.isValid && <span>The input is not valid</span>}
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
              {!state.data.phone.isValid && <span>The phone number is not valid</span>}
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
              {!state.data.email.isValid && <span>The email is not valid</span>}
            </label>
          </div>
        </fieldset>
        <button
          className="designBooking-button"
          type="submit"
          value="submit"
          onClick={handleSubmit}
          disabled={state.disabled}
        >
          {state.status}
        </button>
        {/* status message feedback for user - submitting, success, failure */}
        {state.status === "Submitting" && (
          <span className="submitting">Submitting... 🔄</span>
        )}
        {state.status === "Submitted" && (
          <span className="pass">Submitted ✅</span>
        )}
        {state.status === "Failed to submit" && (
          <span className="fail">Failed to submit ❌</span>
        )}
      </form>
    </>
  );
}
