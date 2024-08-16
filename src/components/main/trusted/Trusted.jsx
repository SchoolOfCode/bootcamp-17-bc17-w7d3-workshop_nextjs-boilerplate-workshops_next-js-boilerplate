'use client'

import { useState, useEffect } from 'react';
import styles from "./styles.module.css";

export default function Trusted() {

    const [ selectedCountry, setSelectedCountry ] = useState(null)
    const [ trustedData, setTrustedData ] = useState(null)

    function handleClick(e) {
        
        // This code will hide the trusted data if you click the country that is already selected
        if (e.target.value === selectedCountry) {
            setSelectedCountry(null)
            setTrustedData(null)
        } else {
            setSelectedCountry(e.target.value)
            e.target.className = styles.active
        }
    }

    useEffect(() => {

        if (selectedCountry) {
            //fetch data
            fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
            .then (response => response.json())
            .then(data => setTrustedData(data))
        }
    }, [selectedCountry])

    return (
        <>
            <h3>Trusted.</h3>
            <p>We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</p>
            <div className="button-list">
                <button className={styles.notactive} onClick={handleClick} value="England">England</button>
                <button className={styles.notactive} onClick={handleClick} value="Wales">Wales</button>
                <button className={styles.notactive} onClick={handleClick} value="Scotland">Scotland</button>
            </div>
            {trustedData && 
                <div>
                    <p>{trustedData.text}</p> {/* Display the review's text */}
                    <p>{trustedData.author} - {trustedData.location}</p> {/* Display the author and location */}
              </div>
            }
        </>
      );
}



// Function below was not working
//
// useEffect(() => {
//     async function fetchData() {
//         if (selectedCountry) {
//             const data = await fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
//             return response.json(data)
//         }
//     }
//     await fetchData()
    
// }, [selectedCountry])