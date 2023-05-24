import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const [data, setData] = useState();
  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const paramData = useParams();

  useEffect(() => {
    fetch("http://65.0.93.119:4000/fetchusers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  const handleAddData = () => {
    fetch(`http://65.0.93.119:4000/update/${paramData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Data is updated");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // console.log(userInput);

  const handelDelectData = () => {
    fetch(`http://65.0.93.119:4000/delete/${paramData.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error deleting data");
        }
        return response.json();
      })
      .then(() => {
        alert("Data is deleted");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const formData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <>
      <div id="register">
        <form onSubmit={() => handleAddData()}>
          <h2>UPDATE ACCOUNT INFO </h2>
          <input
            type="text"
            name="firstname"
            onChange={(e) => formData(e)}
            value={userInput.firstname}
            placeholder="FirstName"
          />
          <input
            type="text"
            name="lastname"
            onChange={(e) => formData(e)}
            value={userInput.lastname}
            placeholder="LastName"
          />
          <input
            type="number"
            name="age"
            onChange={(e) => formData(e)}
            value={userInput.age}
            placeholder="Age"
          />
          <input
            type="email"
            name="email"
            onChange={(e) => formData(e)}
            value={userInput.email}
            placeholder="Email ID"
          />
          <input
            type="number"
            name="phoneNumber"
            onChange={(e) => formData(e)}
            value={userInput.phoneNumber}
            placeholder="Phone Number"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => formData(e)}
            value={userInput.password}
            placeholder="Password"
          />

          <input type="submit" />
          <button className="delectdata" onClick={() => handelDelectData()}>
            Delect
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
