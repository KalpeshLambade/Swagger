import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleAddData = () => {
    if (data.phoneNumber !== 10) {
      alert("Enter 10 digit Phone number");
    } else {
      fetch("http://65.0.93.119:4000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error:", error);
        });
        alert("Users is added to the Database");
    }
  };

  const formData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div id="register">
        <form>
          <h2>REISTER NEW ACCOUNT </h2>
          <input
            type="text"
            name="firstname"
            onChange={(e) => formData(e)}
            value={data.firstname}
            placeholder="FirstName"
          />
          <input
            type="text"
            name="lastname"
            onChange={(e) => formData(e)}
            value={data.lastname}
            placeholder="LastName"
          />
          <input
            type="number"
            name="age"
            onChange={(e) => formData(e)}
            value={data.age}
            placeholder="Age"
          />
          <input
            type="email"
            name="email"
            onChange={(e) => formData(e)}
            value={data.email}
            placeholder="Email ID"
          />
          <input
            type="number"
            name="phoneNumber"
            onChange={(e) => formData(e)}
            value={data.phoneNumber}
            placeholder="Phone Number"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => formData(e)}
            value={data.password}
            placeholder="Password"
          />

          <input type="submit" onClick={() => handleAddData()} />
        </form>
      </div>
    </>
  );
};

export default Register;
