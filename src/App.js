import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import router from "./routing/routers/routers";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { setUser, toggleLoading } from "./features/auth/authSlice";
import { toast, Toaster } from "react-hot-toast";
import {
  useGetCurrentUserQuery,
  usePostUserMutation,
} from "./features/auth/authApi";

function App() {
  /* ============================= 
  //======= For checking if the firebase configured properly
  // console.log(process.env);
  // console.log(document.documentElement);
  ============================ */
  /* =========================
  // Post the user to the MongoDB
  =========================== */
  const [postUser, postResult] = usePostUserMutation();
  /* ====================================
     Get information from the REDUX store
     ====================================*/
  const { email, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    data: userFromDb,
    isSuccess,
    isError,
  } = useGetCurrentUserQuery({ email });

  // OnAuthChang .// we have to do this task where the application load in every change. App.js is the place which is loaded every time when anything change
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // Get the current user from the firebase and Get the user from the database
      if (currentUser && isSuccess) {
        const { emailVerified, uid, email, displayName, photoURL } =
          currentUser;
        const userInfo = {
          displayName,
          userEmail: email,
          emailVerified,
          photoURL,
          uid,
        };

        if (!userFromDb?.status && !isError) {
          // console.log(
          //   "================the user we just registered is not exists in the mongodb, update user in mongodb",
          //   userFromDb?.user
          // );
          /* =============================
          //  Set the user to  the mongodb
          ================================ */
          postUser(userInfo);
          dispatch(setUser(userInfo));
        } else {
          // console.log(
          //   "================the user we just registered is exists in the mongodb, update user in ui from mongodb",
          //   userFromDb?.user
          // );
          dispatch(setUser(userFromDb?.user));
        }

        // Interactions with the mongodb ends
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [
    dispatch,
    userFromDb?.user,
    userFromDb?.status,
    isSuccess,
    isError,
    postUser,
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
