'use client'
import { useState } from "react";
export default function ContactForm() {

  const [ nameState, setNameState]= useState("");

  function handleNameChange (value) {
    setNameState (value.target.value)
    console.log(value);
    console.log(value.target.name)
  }
  
  console.log(nameState)

  return (
    <> 
      <h2>Design Booking</h2>
      <form>
        <fieldset>
          <legend>Personal Information:</legend>
          <label>Full Name<input  type="text" name="fullName" onChange={(event) => {handleNameChange(event)}} /></label>
          <label>Postcode<input type="text" name="postcode"/></label>
          <label>House/Flat Number and Street Name<input type="Text" name="addressNumber"/></label>
          <label>City<input name="cityName" type="Text"/></label>      
        </fieldset>
        <fieldset>
          <legend>Contact Information:</legend>
          <label>Phone Number<input name="phoneNumber" type="number"/></label>
          <label>Email Address<input name="emailAddress" type="email"/></label>
        </fieldset>
        <button type="submit" value="submit">Submit</button>
      </form>
    </>
  );
}
