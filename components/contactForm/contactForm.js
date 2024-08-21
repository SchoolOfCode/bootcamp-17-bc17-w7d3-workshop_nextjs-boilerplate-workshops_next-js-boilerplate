"use client";
import { useState, useEffect, useReducer } from "react";

// set up initial state
// set up reducer function
// import use reducer
// implement useRedeucer in the contactForm
// create action to apply to it

const initialState = {
  data: {
    fullName: "",
  },
  error: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'FULL_NAME':
    console.log("onChange")
    
      return {state};
    
  }

  // switch(expression) {
  //   case x:
  //     // code block
  //     break;
  //   case y:
  //     // code block
  //     break;
  //   default:
  //     // code block
  // }

  return state;  

}

export default function ContactForm() {
  //  const [fullName, setFullName]= useState();
  const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)


  function handleChange(e) {
    console.log(e.target.value);
    console.log(e.target.name);
  
    // use switch 

  }

  function handleSubmit(e) {
    e.preventDefault();
    
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
                onChange={(event) => {
                  handleChange(event);
                }}
              />
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


    // if (e.target.name === "fullName") {
    //   setFullName(e.target.value);
    // } else if (e.target.name === "postcode") {
    //   setPostcode(e.target.value);
    // } else if (e.target.name === "addressNumber") {
    //   setAddressNumber(e.target.value);
    // } else if (e.target.name === "cityName") {
    //   setCityName(e.target.value);
    // } else if (e.target.name === "phoneNumber") {
    //   setNumber(e.target.value);
    // } else if (e.target.name === "emailAddress") {
    //   setEmail(e.target.value);
    // } else {
    //   console.log("the field is empty");
    // }

   //   