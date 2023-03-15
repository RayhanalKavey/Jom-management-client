import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import router from "./routing/routers/routers";
import { RouterProvider } from "react-router-dom";

function App() {
  // For checking if the firebase configured properly
  // console.log(process.env);
  // console.log(document.documentElement);

  // OnAuthChang .// we have to do this task where the application load in every change. App.js is the place which is loaded every time when anything change
  useEffect(() => {}, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
