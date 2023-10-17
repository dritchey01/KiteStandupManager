import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-[#121212]" : null
        } h-[100vh]`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
