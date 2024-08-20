export default function () {
  return (
    <>
      <h1>Design Booking</h1>

      <form>

        <fieldset>

          <legend>Personal Information:</legend>

          <ul>

            <li>
              <label>Full name</label>
              <input></input>
            </li>

            <li>
              <label>Postcode</label>
              <input></input>
            </li>

            <li>
              <label>House Number</label>
              <input></input>
            </li>

            <li>
              <label>City</label>
              <input></input>
            </li>

          </ul>

        
        </fieldset>
        
        <fieldset>

          <legend>Contact Information:</legend>

          <ul>

            <li>
              <label>Phone number</label>
              <input></input>
            </li>

            <li>
              <label>Email address</label>
              <input></input>
            </li>
          </ul>
        </fieldset>

        <div>Error message to conditionally render if information is missing</div>

        <button>Submit</button>

      </form>


    </>
  );
}
