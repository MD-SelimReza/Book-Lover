import { useState } from "react";
import { Outlet } from "react-router-dom";

const BookStore = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="lg:max-w-3xl py-12 mx-auto space-y-12">
      <article className="space-y-8">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-6 justify-center">
            <div
              onClick={() => setTabIndex(0)}
              className={`btn w-28 ${
                tabIndex === 0 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>All Books</span>
            </div>
            <div
              onClick={() => setTabIndex(1)}
              className={`btn w-28 ${
                tabIndex === 1 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>Literary</span>
            </div>
            <div
              onClick={() => setTabIndex(2)}
              className={`btn w-28 ${
                tabIndex === 2 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>Fiction</span>
            </div>
            <div
              onClick={() => setTabIndex(3)}
              className={`btn w-28 ${
                tabIndex === 3 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>Fantasy</span>
            </div>
            <div
              onClick={() => setTabIndex(4)}
              className={`btn w-28 ${
                tabIndex === 4 ? "bg-[#23BE0A] text-white" : ""
              }`}
            >
              <span>Romance</span>
            </div>
          </div>
        </div>
        <Outlet />
      </article>
    </div>
  );
};

export default BookStore;
