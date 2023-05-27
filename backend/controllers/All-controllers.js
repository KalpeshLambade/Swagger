import axios from "axios";

export const addUser = async (req, res) => {
  try {
    fetch("http://65.0.93.119:4000/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "firstname": "kALPESH",
        "lastname": "string",
        "age": 0,
        "email": "abc@gmail.com",
        "phoneNumber": 9876665438,
        "password": "string"
      }),
    })
      .then((response) => response.json())
      .then((response) => res.send(response))
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (err) {
    return res.send(err);
  }
};

export const updateUser = async (req, res) => {
    try {
      fetch("http://65.0.93.119:4000/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "firstname": "Swaraj",
          "lastname": "string",
          "age": 0,
          "email": "abc@gmail.com",
          "phoneNumber": 9876665438,
          "password": "string"
        }),
      })
        .then((response) => response.json())
        .then((response) => res.send(response))
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      return res.send(err);
    }
  };


export const getAllUser = async (req, res) => {
  try {
      fetch("http://65.0.93.119:4000/fetchusers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((response) => response.json())
        .then((response) => res.send(response))
        .catch((error) => {
          console.error("Error:", error);
        });
  } catch (err) {
    return res.send(err);
  }
};

export const ping = (req, res) => {
  res.send("Pong");
};
