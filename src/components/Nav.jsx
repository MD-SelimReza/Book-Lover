import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] p-1 rounded-md font-medium border border-[#23BE0A] hover:text-white hover:bg-[#23BE0A]"
                  : "font-medium p-1 rounded-md"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listBooks"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] p-1 rounded-md font-medium border border-[#23BE0A] hover:text-white hover:bg-[#23BE0A]"
                  : "font-medium p-1 rounded-md"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/readBooks"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] p-1 rounded-md font-medium border border-[#23BE0A] hover:text-white hover:bg-[#23BE0A]"
                  : "font-medium p-1 rounded-md"
              }
            >
              Pages to Read
            </NavLink>
            <NavLink
              to="/bookDetails"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] p-1 rounded-md font-medium border border-[#23BE0A] hover:text-white hover:bg-[#23BE0A]"
                  : "font-medium p-1 rounded-md"
              }
            >
              Book Details
            </NavLink>
            <NavLink
              to="/bookStore"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] p-1 rounded-md font-medium border border-[#23BE0A] hover:text-white hover:bg-[#23BE0A]"
                  : "font-medium p-1 rounded-md"
              }
            >
              Stored book
            </NavLink>
          </ul>
        </div>
        <Link className="text-xl flex lg:text-3xl gap-0 normal-case font-bold text-[#23BE0A]">
          Book <span className="text-[#59C6D2]">Bright</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border font-medium border-[#23BE0A] hover:text-white hover:bg-[#23BE0A] px-3 py-1 rounded-md"
                : "font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listBooks"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-medium border border-[#23BE0A] hover:text-white hover:bg-[#23BE0A] px-3 py-1 rounded-md"
                : "font-medium"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/readBooks"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-medium border border-[#23BE0A] hover:text-white hover:bg-[#23BE0A] px-3 py-1 rounded-md"
                : "font-medium"
            }
          >
            Pages to Read
          </NavLink>
          <NavLink
            to="/bookDetails"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-medium border border-[#23BE0A] hover:text-white hover:bg-[#23BE0A] px-3 py-1 rounded-md"
                : "font-medium"
            }
          >
            Book Details
          </NavLink>
          <NavLink
            to="/bookStore"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-medium border border-[#23BE0A] hover:text-white hover:bg-[#23BE0A] px-3 py-1 rounded-md"
                : "font-medium"
            }
          >
            Stored book
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        <button className="text-white bg-[#23BE0A] p-2 lg:py-2 lg:px-4 rounded-md">
          Sign In
        </button>
        <button className="text-white bg-[#59C6D2] p-2 lg:py-2 lg:px-4 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
