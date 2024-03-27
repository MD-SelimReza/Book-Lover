import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListBook from "../pages/ListBook";
import ReadBook from "../pages/ReadBook";
import BookDetails from "../components/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/book.json"),
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
