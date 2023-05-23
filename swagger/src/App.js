import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Component/Homepage";
import Register from "./Component/Register";
import Update from "./Component/Update";
import Login from "./Component/Login";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/reg" element={<Register />} />
        <Route exact path="/up/:id" element={<Update />} />
        <Route exact path="/log" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
