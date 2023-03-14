import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  // Check the system preference. It will check this once.
  useEffect(() => {
    window.matchMedia("prefers-color-scheme:dark").matches
      ? setTheme("dark")
      : setTheme("light");
  }, []);

  // Set the theme according the handleThemeSwitch functions theme preference
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  // Switch theme function called when user want to switch theme
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className=" bg-green-500 dark:bg-slate-500">
      <button className=" bg-green-300" onClick={handleThemeSwitch}>
        Theme switcher
      </button>
    </div>
  );
}

export default App;
