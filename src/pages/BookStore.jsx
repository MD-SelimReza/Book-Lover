import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const BookStore = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="lg:max-w-3xl py-12 mx-auto space-y-12">
      <article className="space-y-8">
        <div className="space-y-6">
          <div className="flex items-center gap-6 justify-center">
            <Link
              onClick={() => setTabIndex(0)}
              to=""
              className={`btn w-28 ${
                tabIndex === 0 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>All Books</span>
            </Link>
            <Link
              onClick={() => setTabIndex(1)}
              to="literary"
              className={`btn w-28 ${
                tabIndex === 1 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>Literary</span>
            </Link>
            <Link
              onClick={() => setTabIndex(2)}
              to="fiction"
              className={`btn w-28 ${
                tabIndex === 2 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>Fiction</span>
            </Link>
            <Link
              onClick={() => setTabIndex(3)}
              to="fantasy"
              className={`btn w-28 ${
                tabIndex === 3 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>Fantasy</span>
            </Link>
            <Link
              onClick={() => setTabIndex(4)}
              to="romance"
              className={`btn w-28 ${
                tabIndex === 4 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>Romance</span>
            </Link>
          </div>
        </div>
        <Outlet />
      </article>
    </div>
  );
};

export default BookStore;
