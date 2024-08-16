'use client';
import { useState, useEffect } from 'react'; 


function Review() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryData, setCountryData] = useState([]); 
  const [activeClass, setActiveClass] = useState(""); 
  // https://legacy.reactjs.org/docs/hooks-state.html
  // useState hock
  // set initial value to null

  // https://react.dev/reference/react/useEffect
  // useEffect hock
  // https://www.w3schools.com/jsref/api_fetch.asp
  //fetch data


  useEffect(() => {
    fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
  .then(response => response.json())
  .then(data => setCountryData(data));
  console.log(`This country is selected ${selectedCountry}`);
    console.log(countryData);
  }, [selectedCountry]);


  //parse data
  //store data (useState variable)
  // listen for useState changes

  //clickHandler function
  function clickHandler(value) {
    setSelectedCountry(value);
    setActiveClass("active");
  }

  //store value
  //change color for selected

  return (
  // https://files.slack.com/files-pri/T072XV4SXB9-F07H514KR7W/image20240815141956.png
  // https://files.slack.com/files-pri/T072XV4SXB9-F07H2G5GRC2/image20240815142009.png
  // https://files.slack.com/files-pri/T072XV4SXB9-F07H517FC4U/image20240815142040.png
  // https://files.slack.com/files-pri/T072XV4SXB9-F07GVT1HYBG/image20240815142621.png
  //
<>
  <section className="reviewContainer">
  <h2 className="reviewTitle"> Trusted </h2>
  <p className="reviewDesc"> We've got thousends of happy customers all over the UK. Choose your country to see the latest review.</p>
  <div className="reviewButtonContainer"> 
  <button onClick={() => {clickHandler("England")}} className= {`reviewButton ${""}`} > England </button>
  <button onClick={() => {clickHandler("Wales")}} className={`reviewButton ${""}`}> Wales </button>
  <button onClick={() => {clickHandler("Scotland")}} className={`reviewButton ${""}`}> Scotland </button>
  </div>
  </section>

  <section className = "conditionalContainer">
  <p className = "conditionalText"> {countryData.text} </p>
  <p className = "conditionalInfo"> 
    <span>{countryData.author}</span> <span> &nbsp;  - &nbsp; </span>
  <span>{countryData.location}</span>
  </p>
   </section>
   </>
   )
}

export default Review; // to main element ->


// author
// : 
// "Amy Mcdonald"
// businessName
// : 
// "Fireplace Palace"
// location
// : 
// "Inverness"
// text
// : 
// "We couldn't be 