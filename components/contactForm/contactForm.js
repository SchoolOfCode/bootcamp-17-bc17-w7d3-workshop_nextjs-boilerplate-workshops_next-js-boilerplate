"use client";
import { useState } from "react";
export default function ContactForm() {
  const [nameState, setNameState] = useState("");

  function handleNameChange(e) {
    console.log(e.target.value);
    console.log(e.target.name);
    switch (e) {
      case value.target.name === "fullName":
        setNameState(e.target.value);
        break;
      case value.target.name === "postCode":
        // update
        break;
      case value.target.name === "addressNumber":
        // update
        break;
      case value.target.name === "cityName":
        // update
        break;
      default:
        console.log("the field is empty");
        break;
    }
  }

  // if (value.target.name === "fullName")
  // setNameState(value.target.value)

  console.log(nameState);

  return (
    <>
      <h2>Design Booking</h2>
      <form>
        <fieldset>
          <legend>Personal Information:</legend>
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              onChange={(event) => {
                handleNameChange(event);
              }}
            />
          </label>
          <label>
            Postcode
            <input type="text" name="postcode" />
          </label>
          <label>
            House/Flat Number and Street Name
            <input type="Text" name="addressNumber" />
          </label>
          <label>
            City
            <input name="cityName" type="Text" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Contact Information:</legend>
          <label>
            Phone Number
            <input name="phoneNumber" type="number" />
          </label>
          <label>
            Email Address
            <input name="emailAddress" type="email" />
          </label>
        </fieldset>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
}
