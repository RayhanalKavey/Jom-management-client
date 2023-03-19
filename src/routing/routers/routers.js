import TopCompany from "../../components/TopCompany/TopCompany";
import EmployerDashLayout from "../../layout/EmployerDashLayout/EmployerDashLayout";
import JobSeekerDashboardLayout from "../../layout/JobSeekerDashboardLayout/JobSeekerDashboardLayout";
import Main from "../../layout/Main/Main";
import ErrorPage from "../../layout/shared/ErrorPage/ErrorPage";
import About from "../../pages/About/About";
import Login from "../../pages/authentication/Login/Login";
import Registration from "../../pages/authentication/Registration/Registration";
import Contact from "../../pages/Contact/Contact";
import AddJob from "../../pages/EmployerDashboard/AddJob/AddJob";
import MyPostedJob from "../../pages/EmployerDashboard/MyPostedJob/MyPostedJob";
import EmployerRegistration from "../../pages/EmployerRegistration/EmployerRegistration";
import HomePage from "../../pages/home/Home/HomePage";
import JobPosterOrJobSeeker from "../../pages/JobPosterOrJobSeeker/JobPosterOrJobSeeker";
import MyApply from "../../pages/JobSeekerDashboard/MyApply/MyApply";
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
    children: [
      { path: "/employer-dashboard", element: <MyPostedJob /> },
      { path: "/employer-dashboard/my-posted-job", element: <MyPostedJob /> },
      { path: "/employer-dashboard/add-job", element: <AddJob /> },
    ],
  },
  {
    path: "/job-seeker-dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <JobSeekerDashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/job-seeker-dashboard", element: <MyApply /> },
      { path: "/job-seeker-dashboard/my-apply", element: <MyApply /> },
      { path: "/job-seeker-dashboard/top-company", element: <TopCompany /> },
    ],
  },
]);
export default router;
