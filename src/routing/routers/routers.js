import DashLayout from "../../layout/DashLayout/DashLayout";
import Main from "../../layout/Main/Main";
import ErrorPage from "../../layout/shared/ErrorPage/ErrorPage";
import About from "../../pages/About/About";
import Login from "../../pages/authentication/Login/Login";
import Registration from "../../pages/authentication/Registration/Registration";
import Contact from "../../pages/Contact/Contact";
import EmployerRegistration from "../../pages/EmployerRegistration/EmployerRegistration";
import Home from "../../pages/home/Home/Home";
import JobPosterOrJobSeeker from "../../pages/JobPosterOrJobSeeker/JobPosterOrJobSeeker";
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
    children: [
      { path: "/dashboard", element: <JobPosterOrJobSeeker /> },
      { path: "/dashboard/employerForm", element: <EmployerRegistration /> },
    ],
  },
  // { path: "/home", errorElement: <ErrorPage />, element: <Home /> },
]);
export default router;
