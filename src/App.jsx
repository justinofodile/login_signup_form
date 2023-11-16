import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="flex justify-center h-screen space-x-6 items-center flex-col lg:flex-row">
      <Login />
      <SignUp />
    </section>
  );
}

export default App;
