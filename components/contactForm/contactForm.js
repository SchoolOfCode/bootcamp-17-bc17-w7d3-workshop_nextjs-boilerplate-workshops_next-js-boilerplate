"use client";
import { useState, useEffect, useReducer } from "react";

const initialState = {
  data: {
    fullName: {value: "", isTouched: false},
    postcode: {value: "", isTouched: false},
    addressNumber: {value: "", isTouched: false},
    cityName: {value: "", isTouched: false},
    phoneNumber: {value: "", isTouched: false},
    email: {value: "", isTouched: false},
  },
  error: false,
}

// empty fields
// length phonenumbers
// postcode validity
// email has @ and "." 
function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        [action.field]: action.value
      };
      case "INPUT_CHECKED":
        return 
      default:
        return state;
  } 
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
    //console.log(state)


  function handleChange(e) {
    // console.log(e.target.value);
    // console.log(e.target.name);
    dispatch({type: "SET_FIELD_VALUE", field: e.target.name, value: e.target.value })
    if (e.target.value){
      console.log("value")
    } else {
      console.log("error")
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
    // create a function to add the error handling func
    // is the field empty? 
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
                            value= {state.fullName}
                            onChange={(event) => {
                              handleChange(event);
                            }}
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
                        {state.isTouched && !state.cityName ? console.log("well done!") : (<p className="errorMessage">Error - The fields is empty</p>)}
                      </label>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div className="designBooking-container"> 
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
                          value={state.email}
                          onChange={handleChange} /> 
                        </label>
                        </div>
          </fieldset>

        <fieldset className="designBooking-fieldset">
          <legend className="designBooking-legend">Contact Information:</legend>
          
        </fieldset>
        <button className="designBooking-button" type="submit" value="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
