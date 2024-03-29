import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListBook from "../pages/ListBook";
import ReadBook from "../pages/ReadBook";
import BookDetails from "../components/BookDetails";
import ReadList from "../components/ReadList";
import Wishlist from "../components/Wishlist";
import DetailsBook from "../pages/DetailsBook";
import ErrorState from "../components/ErrorState";
import BookStore from "../pages/BookStore";
import AllBook from "../components/AllBook";
import Fiction from "../components/Fiction";
import Fantasy from "../components/Fantasy";
import Romance from "../components/Romance";
import Literary from "../components/Literary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorState />,
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
        loader: () => fetch("/book.json"),
        children: [
          {
            index: true,
            element: <ReadList />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/readBooks",
        element: <ReadBook />,
      },
      {
        path: "/bookDetails",
        element: <DetailsBook />,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/bookStore",
        element: <BookStore />,
        loader: () => fetch("/book.json"),
        children: [
          {
            index: true,
            element: <AllBook />,
          },
          {
            path: "literary",
            element: <Literary />,
          },
          {
            path: "fiction",
            element: <Fiction />,
          },
          {
            path: "fantasy",
            element: <Fantasy />,
          },
          {
            path: "romance",
            element: <Romance />,
          },
        ],
      },
    ],
  },
]);
