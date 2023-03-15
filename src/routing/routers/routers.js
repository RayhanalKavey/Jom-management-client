import DashLayout from "../../layout/DashLayout/DashLayout";
import Main from "../../layout/Main/Main";
import ErrorPage from "../../layout/shared/ErrorPage/ErrorPage";
import About from "../../pages/About/About";
import Login from "../../pages/authentication/Login/Login";
import Registration from "../../pages/authentication/Registration/Registration";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/home/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashLayout></DashLayout>
      </PrivateRoute>
    ),
  },
  // { path: "/home", errorElement: <ErrorPage />, element: <Home /> },
]);
export default router;
