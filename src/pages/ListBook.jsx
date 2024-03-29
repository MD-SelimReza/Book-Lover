import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const ListBook = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const sortedFun = () => {};

  return (
    <div className="lg:max-w-3xl py-12 mx-auto space-y-12">
      <article className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold md:tracking-tight text-center bg-gray-200 rounded-lg py-6 md:text-3xl">
            Books
          </h1>
          <div className="flex justify-center">
            <details className="dropdown rounded-lg">
              <summary className="bg-[#23BE0A] w-44 text-center text-white py-2 px-8 rounded-lg flex items-center gap-6 border-none outline-none">
                Sort By <IoIosArrowDown className="size-6" />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-200  w-44">
                <li>
                  <a onClick={sortedFun}>Rating</a>
                </li>
                <li>
                  <a>Number of pages</a>
                </li>
                <li>
                  <a>Publisher year</a>
                </li>
              </ul>
            </details>
          </div>
          <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
            <Link
              onClick={() => setTabIndex(0)}
              to=""
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Read Books</span>
            </Link>
            <Link
              onClick={() => setTabIndex(1)}
              to="wishlist"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Wishlist Books</span>
            </Link>
          </div>
        </div>
        <Outlet />
      </article>
    </div>
  );
};

export default ListBook;
