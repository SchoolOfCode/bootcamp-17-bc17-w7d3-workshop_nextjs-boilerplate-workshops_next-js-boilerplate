'use client';

import { useState } from 'react';

import styles from './styles.module.css';

export default function ContactForm() {

    const [ fullName, setFullName ] = useState("");
    const [ postcode, setPostcode ] = useState("");
    const [ street, setStreet ] = useState("");
    const [ city, setCity ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ email, setEmail ] = useState("");

    const [ error, setError ] = useState(false);

    function handleChange(event) {

        if (event.target.name === "fullName") {
            setFullName(event.target.value);
        }

        if (event.target.name === "postcode") {
            setPostcode(event.target.value);
        }

        if (event.target.name === "street") {
            setStreet(event.target.value);
        }

        if (event.target.name === "city") {
            setCity(event.target.value);
        }

        if (event.target.name === "phoneNumber") {
            setPhoneNumber(event.target.value);
        }

        if (event.target.name === "email") {
            setEmail(event.target.value);
        }
    }

    function handleSubmit(eventArgument) {
        eventArgument.preventDefault();
        
        if (!fullName || !postcode || !street || !city || !phoneNumber || !email)  {
            setError(true);
            return;
        }

        if (error) {
            setError(false);
        }

        console.log("Data!!!!!!");
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} className={styles.form}>

            <fieldset className={styles.group}>

                <legend className={styles.groupTitle}>Personal Info:</legend>

                <label className={styles.inputGroup}>Full Name:
                    <input 
                        type="text"
                        name="fullName"
                        onChange={(event) => handleChange(event)}
                        value={fullName}
                        className={styles.input}
                    />
                </label>

                <label className={styles.inputGroup}>Postcode:
                    <input
                        type="text"
                        name="postcode"
                        onChange={(event) => handleChange(event)}
                        value={postcode}
                        className={styles.input}
                    />
                </label>

                <label className={styles.inputGroup}>House Number and Street Name:
                    <input
                        type="text"
                        name="street"
                        onChange={(event) => handleChange(event)}
                        value={street}
                        className={styles.input}
                    />
                </label>

                <label className={styles.inputGroup}>City:
                    <input
                        type="text"
                        name="city"
                        onChange={(event) => handleChange(event)}
                        value={city}
                        className={styles.input}
                    />
                </label>

            </fieldset>

            <fieldset className={styles.group}>

                <legend className={styles.groupTitle}>Contact Info:</legend>

                <label className={styles.inputGroup}>Phone Number:
                    <input 
                        type="text"
                        name="phoneNumber"
                        onChange={(event) => handleChange(event)}
                        value={phoneNumber}
                        className={styles.input}
                    />
                </label>

                <label className={styles.inputGroup}>Email:
                    <input
                        type="text"
                        name="email"
                        onChange={(event) => handleChange(event)}
                        value={email}
                        className={styles.input}
                    />
                </label>

            </fieldset>

            { error && <p className={styles.error}>Error</p> }

            <button type="submit" className={styles.button}>Request Design Consultation</button>

        </form>
    )
}