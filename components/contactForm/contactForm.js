import { useState } from "react";
export default function ContactForm() {
  const [formData, setFormName] = useState({ name: "", age: "" });

  const formDatas = {
    name: "",
    age: "",
  };

  console.log(formData);

  function handleOnChange(e) {
    // setage(e.target.value);
    console.log(e.target.value);
  }

  return (
    <form>
      <fieldset>
        <legend>title</legend>
        <div>
          <label>
            {" "}
            name
            <input
              onChange={(e) => {
                handleOnChange(e);
              }}
              type="text"
            />
          </label>
        </div>

        <div>
          <label>
            {" "}
            age
            <input onChange={handleOnChange} type="text" />
          </label>
        </div>
      </fieldset>
    </form>
  );
}
