import React, { useRef } from "react";
import "./Form.css";
function Form() {
  const formValuesRef = useRef({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    formValuesRef.current[name] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", formValuesRef.current);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter your name"
          onChange={handleOnChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          onChange={handleOnChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactno">Contact No:</label>
        <input
          type="number"
          name="contactno"
          id="contactno"
          placeholder="enter your phone no"
          onChange={handleOnChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          value="male"
          name="gender"
          id="male"
          onChange={handleOnChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          value="female"
          name="gender"
          id="female"
          onChange={handleOnChange}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          value="other"
          name="gender"
          id="other"
          onChange={handleOnChange}
        />
        <label htmlFor="other">Other</label>
      </div>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
