'use client'
import { useState } from "react";
export default function ContactForm() {

  const [ nameState, setNameState]= useState("");

  function handleNameChange (value) {
    setNameState (value.target.value)
    // console.log(value);
    // console.log(value.target.name)

    
  }
  
  if (value.target.name === "fullName") 
  setNameState(value.target.value)

    switch (value) {
        case 1:
            console.log("i is 1");
            break;
        case 2:
            console.log("i is 2");
            break;
        case 3:
            console.log("i is 3");
            break;
        case 4:
            console.log("i is 4");
            break;
        case 5:
            console.log("i is 5");
            break;
        default:
            console.log("This will not be executed");
            break;
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
