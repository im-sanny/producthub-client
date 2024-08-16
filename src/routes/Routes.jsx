import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import SignIn from "../pages/Authentication/SignIn";
import Register from "../pages/Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path:'/signin',
        element:<SignIn></SignIn>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      }
    ],
  },
]);

export default router;
