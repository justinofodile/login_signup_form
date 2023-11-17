import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ActionBtn from "./components/ui/ActionBtn";

function App() {
  const [display, setDisplay] = useState("Login");

  function toggleDisplay(params) {
    if (display === "Login") {
      setDisplay("SignUp");
    } else {
      setDisplay("Login");
    }
  }

  return (
    <section className="flex justify-center h-screen space-x-6 items-center flex-col lg:flex-row">
      {display === "Login" ? <Login /> : <SignUp />}

      <button className="mt-5" onClick={toggleDisplay}>
        Toogle Forms
      </button>
      <ActionBtn
        actColor={"primary"}
        text={"Toggle Form"}
        onClick={toggleDisplay}
      />
    </section>
  );
}

export default App;
