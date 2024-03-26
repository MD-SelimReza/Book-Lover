import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListBook from "../pages/ListBook";
import ReadBook from "../pages/ReadBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listBooks",
        element: <ListBook />,
      },
      {
        path: "/readBooks",
        element: <ReadBook />,
      },
    ],
  },
]);
