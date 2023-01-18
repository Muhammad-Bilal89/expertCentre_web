import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import MenLaser from "./MenLaser";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "men",
    element: <MenLaser />,
  },
]);

export default Router;
