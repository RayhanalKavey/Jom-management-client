import EmployerDashLayout from "../../layout/EmployerDashLayout/EmployerDashLayout";
import JobSeekerDashboard from "../../layout/JobSeekerDashboard/JobSeekerDashboard";
import Main from "../../layout/Main/Main";
import ErrorPage from "../../layout/shared/ErrorPage/ErrorPage";
import About from "../../pages/About/About";
import Login from "../../pages/authentication/Login/Login";
import Registration from "../../pages/authentication/Registration/Registration";
import Contact from "../../pages/Contact/Contact";
import EmployerRegistration from "../../pages/EmployerRegistration/EmployerRegistration";
import HomePage from "../../pages/home/Home/HomePage";
import JobPosterOrJobSeeker from "../../pages/JobPosterOrJobSeeker/JobPosterOrJobSeeker";
import JobSeekerRegistration from "../../pages/JobSeekerRegistration/JobSeekerRegistration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
      {
        path: "/poster-seeker",
        element: (
          <PrivateRoute>
            <JobPosterOrJobSeeker />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/employerForm",
        element: (
          <PrivateRoute>
            <EmployerRegistration />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobSeekerForm",
        element: (
          <PrivateRoute>
            <JobSeekerRegistration />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/employer-dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <EmployerDashLayout />
      </PrivateRoute>
    ),
    children: [],
  },
  {
    path: "/job-seeker-dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <JobSeekerDashboard />
      </PrivateRoute>
    ),
    children: [],
  },
  // { path: "/home", errorElement: <ErrorPage />, element: <Home /> },
]);
export default router;
