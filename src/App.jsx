import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ActionBtn from "./components/ui/ActionBtn";

function App() {
  const [display, setDisplay] = useState("sign up");

  const handleDisplay = () => {
    if (display === "sign up") {
      setDisplay("log in");
    } else {
      setDisplay("sign up");
    }
  };

  return (
    <section className="flex justify-center h-screen space-x-6 items-center">
      {display === "sign up" ? (
        <SignUp handleDisplay={handleDisplay} />
      ) : (
        <Login handleDisplay={handleDisplay} />
      )}
    </section>
  );
}

export default App;
