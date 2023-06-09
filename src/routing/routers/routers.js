import TopCompany from "../../components/TopCompany/TopCompany";
import EmployerDashLayout from "../../layout/EmployerDashLayout/EmployerDashLayout";
import JobSeekerDashboardLayout from "../../layout/JobSeekerDashboardLayout/JobSeekerDashboardLayout";
import Main from "../../layout/Main/Main";
import ErrorPage from "../../layout/shared/ErrorPage/ErrorPage";
import Login from "../../pages/authentication/Login/Login";
import Registration from "../../pages/authentication/Registration/Registration";
import Contact from "../../pages/Contact/Contact";
import AddJob from "../../pages/EmployerDashboard/AddJob/AddJob";
import MyPostedJob from "../../pages/EmployerDashboard/MyPostedJob/MyPostedJob";
import ShortListedJob from "../../pages/JobSeekerDashboard/ShortListedJob/ShortListedJob";
import UpdateJob from "../../pages/EmployerDashboard/UpdateJob/UpdateJob";
import EmployerRegistration from "../../pages/EmployerRegistration/EmployerRegistration";
import HomePage from "../../pages/home/Home/HomePage";
import JobPosterOrJobSeeker from "../../pages/JobPosterOrJobSeeker/JobPosterOrJobSeeker";
import JobSeekerProfileUpdate from "../../pages/JobSeekerDashboard/JobSeekerProfileUpdate/JobSeekerProfileUpdate";
import MyApply from "../../pages/JobSeekerDashboard/MyApply/MyApply";
import JobSeekerRegistration from "../../pages/JobSeekerRegistration/JobSeekerRegistration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EmployerProfileUpdate from "../../pages/EmployerDashboard/EmployerProfileUpdate/EmployerProfileUpdate";
import FresherJob from "../../pages/FresherJob/FresherJob";
import ExperiencedJob from "../../pages/ExperiencedJob/ExperiencedJob";
import AllJob from "../../pages/AllJob/AllJob";
import Blog from "../../pages/Blog/Blog";
import BlogDetails from "../../pages/Blog/BlogDetails";
import PostedJobDetails from "../../pages/EmployerDashboard/MyPostedJob/PostedJobDetails";
import Applicants from "../../pages/EmployerDashboard/Applicants/Applicants";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog-details", element: <BlogDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
      { path: "/top-company", element: <TopCompany /> },
      { path: "/fresher-job", element: <FresherJob /> },
      { path: "/experienced-Job", element: <ExperiencedJob /> },
      { path: "/all-job", element: <AllJob /> },

      // { path: "/all-fresher-job", element: <AllJob /> },
      // { path: "/all-experienced-job", element: <AllJob /> },
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
      {
        path: "/employer-dashboard/my-posted-job",
        element: <MyPostedJob />,
        children: [],
      },
      {
        path: "/employer-dashboard/my-posted-job/details",
        element: <PostedJobDetails />,
      },

      {
        path: "/employer-dashboard/applicant-job/:id",
        element: <Applicants />,
      },
      { path: "/employer-dashboard/add-job", element: <AddJob /> },
      { path: "/employer-dashboard/update-job", element: <UpdateJob /> },
      {
        path: "/employer-dashboard/EmployerProfileUpdate",
        element: <EmployerProfileUpdate />,
      },
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
      {
        path: "/job-seeker-dashboard/JobSeekerProfileUpdate",
        element: <JobSeekerProfileUpdate />,
      },
      {
        path: "/job-seeker-dashboard/shortlisted",
        element: <ShortListedJob />,
      },
    ],
  },
]);
export default router;
