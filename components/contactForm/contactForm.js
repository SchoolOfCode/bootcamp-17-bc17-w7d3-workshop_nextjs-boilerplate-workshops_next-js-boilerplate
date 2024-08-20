import { useState } from "react";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [age, setage] = useState("");

  const formData = {
    name: name,
    age: age,
  };

  //   formData.name = onChange;
  //   formData.age = 18;
  //   formData.friend = "Ian";

  console.log(formData);

  function handleOnChange(e) {
    setName(e.target.value);
    setage(e.target.value);
    // console.log("dom value", e.target.value);
    // console.log("onChange value", onChange);
    console.log(formData);
  }

  return (
    <form>
      <fieldset>
        <legend>title</legend>
        <div>
          <label>
            {" "}
            name
            <input onChange={handleOnChange} type="text" />
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
