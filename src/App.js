import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import router from "./routing/routers/routers";
import { RouterProvider } from "react-router-dom";

function App() {
  // For checking if the firebase configured properly
  // console.log(process.env);
  /* ======================
     Dark mood system start
     ======================*/
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
  /* ======================
     Dark mood system end
     ======================*/
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
