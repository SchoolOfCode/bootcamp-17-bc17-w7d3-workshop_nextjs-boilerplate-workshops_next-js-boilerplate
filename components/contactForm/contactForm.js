"use client";
import { useState, useEffect } from "react";
export default function ContactForm() {
  
  const [fullName, setFullName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [cityName, setCityName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [formValid, setFormValid] = useState(null);

  function handleChange(e) {
    console.log(e.target.value);
    console.log(e.target.name);

    if (e.target.name === "fullName" ) {
        setFullName(e.target.value);
    } else if (e.target.name === "postcode") {
        setPostcode(e.target.value);
    } else if (e.target.name === "addressNumber") {
        setAddressNumber(e.target.value);
    } else if (e.target.name === "cityName") {
        setCityName(e.target.value);
    } else if (e.target.name === "phoneNumber") {
        setNumber(e.target.value);
    } else if (e.target.name === "emailAddress") {
        setEmail(e.target.value);
    } else {
        console.log("the field is empty");
    }

    if (fullName && postcode && addressNumber && cityName && number && email != 0 ) {
      console.log("all done!")
    } else {
      console.log("At least one of the fields is empty"); 
    }
}

// this is how we could use Switch loop instead of If
  // switch (e.target.name) {
  //     case "fullName":
  //         setFullName(e.target.value);
  //         break;
  //     case "postCode":
  //         setPostcode(e.target.value);
  //         break;
  //     case "addressNumber":
  //         setAddressNumber(e.target.value);
  //         break;
  //     case "cityName":
  //         setCityName(e.target.value);
  //         break;
  //     case "phoneNumber":
  //         setNumber(e.target.value);
  //         break;
  //     case "emailAddress":
  //         setEmail(e.target.value);
  //         break;
  //     default:
  //         console.log("the field is empty");
  //         break;
  // }

  console.log(fullName, postcode, addressNumber, cityName, number, email);
}

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
                handleChange(event);
              }}
            />
          </label>
          <label>
            Postcode
            <input type="text" name="postcode" 
            onChange={(event) => {
              handleChange(event);
            }}/>
          </label>
          <label>
            House/Flat Number and Street Name
            <input type="Text" name="addressNumber" onChange={(event) => {
                handleChange(event);
                }} />
          </label>
          <label>
            City
            <input name="cityName" type="Text" onChange={(event) => {
                handleChange(event);
              }} />
          </label>
        </fieldset>
        <fieldset>
          <legend>Contact Information:</legend>
          <label>
            Phone Number
            <input name="phoneNumber" type="number" onChange={(event) => {
                handleChange(event);
              }}/>
          </label>
          <label>
            Email Address
            <input name="emailAddress" type="email" onChange={(event) => {
                handleChange(event);
              }} />
          </label>
        </fieldset>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );

  }