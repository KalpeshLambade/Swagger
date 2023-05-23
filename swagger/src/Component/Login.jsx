import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/style.css";

const Login = () => {
  const route = useNavigate();
  const [data, setData] = useState();
  const [userInput, setUserInput] = useState();

  useEffect(() => {
    fetch("http://65.0.93.119:4000/fetchusers")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  console.log(data);
  //   console.log(userInput);

  const submit = (e) => {
    e.preventDefault();
    let flag;

    for (let i = 0; i < data.length; i++) {
      if (data[i].email === userInput) {
        var setID = data[i]._id;
        flag = true;
      } else {
        flag = false;
      }
    }

    if (flag) {
      alert("Email Found");
      route(`/up/${setID}`);
    } else {
      alert("No Email Found");
    }
  };

  return (
    <>
      <div id='login'>
        <form onSubmit={(e) => submit(e)}>
          <h2>LOG IN</h2>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
