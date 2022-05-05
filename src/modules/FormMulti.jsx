import { useState } from "react";
export default function MultipleInputs({ changeUserInfo, logged }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange({ target }) {
    // console.log(target.name);
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // const {firstName, lastName, age} = formData;
    // alert(`Hello, ${firstName} ${lastName}! You are ${age} years young.`);
    changeUserInfo(formData);
    logged();
  }
  return (
    <form>
      <input
        onChange={handleChange}
        placeholder="First Name"
        name="firstName"
      ></input>
      <input
        onChange={handleChange}
        placeholder="Last Name"
        name="lastName"
      ></input>

      <br />
      <button onClick={handleSubmit}>Login</button>
    </form>
  );
}
