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
import { useGetUserQuery, usePostUserMutation } from "./features/auth/authApi";

function App() {
  /* ============================= 
  //======= For checking if the firebase configured properly
  // console.log(process.env);
  // console.log(document.documentElement);

  const { isLoading } = useSelector((state) => state.auth);
  // console.log(isLoading);
  ============================ */

  /* =========================
  // Get  user from the MongoDB
  =========================== */
  const { data: usersInDatabase } = useGetUserQuery();

  /* =========================
  // Post the user to the MongoDB
  =========================== */
  const [postUser, postResult] = usePostUserMutation();

  if (postResult?.isError) {
    toast.error(postResult?.error, { id: "postUsr" });
  }

  const dispatch = useDispatch();

  // OnAuthChang .// we have to do this task where the application load in every change. App.js is the place which is loaded every time when anything change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // Get the current user from the firebase and Get the user from the database
      if (user && usersInDatabase) {
        const { displayName, emailVerified, photoUrl, uid } = user;
        const userInfo = {
          displayName,
          userEmail: user?.email,
          emailVerified,
          photoUrl,
          uid,
        };

        // console.log("Logged in user from onAuthStateChange", userInfo);
        /* =============================
       //  If the user new user not exists in the mongodb the set the user to  the mongodb
        ================================ */
        // dispatch(setUser(userInfo));
        if (!usersInDatabase?.some((userObj) => userObj?.uid === user?.uid)) {
          console.log(
            "===============the user we just registered is not exists in the mongodb"
          );
          //  True means :- the user we just registered is not exists in the mongodb
          postUser(userInfo);
        } else {
          // "get the current user user",
          const currentUser = usersInDatabase?.find(
            (userObj) => userObj?.uid === user?.uid
          );
          dispatch(setUser(currentUser));
          console.log(
            "================the user we just registered is  exists in the mongodb",
            currentUser
          );
        }
        // Interactions with the mongodb ends
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [usersInDatabase, postUser, dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
