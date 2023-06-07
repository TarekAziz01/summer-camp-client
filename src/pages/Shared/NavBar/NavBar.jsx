import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogin = () => {
    // Code to handle login functionality
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Code to handle logout functionality
    setLoggedIn(false);
  };

  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };

  const nabOptions = (
    <>
      <li>
        <Link className="text-white hover:text-gray-300" to="/course">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-white hover:text-gray-300" to="/course">
          Course
        </Link>
      </li>
      <li>
        <Link className="text-white hover:text-gray-300" to="/course">
          Instructors
        </Link>
      </li>
      <li>
        <Link className="text-white hover:text-gray-300" to="/course">
          Contact
        </Link>
      </li>
      <li>
        <Link className="text-white hover:text-gray-300" to="/course">
          About
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue-500 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52"
          >
            {nabOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-white font-bold">
          SportLearn
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nabOptions}</ul>
      </div>
      <div className="navbar-end">
        {loggedIn ? (
          <div>
            <img
              src="profile-picture.jpg"
              alt="User Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={handleProfileClick}
            />
            {showLogout && (
              <button
                className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200"
                onClick={handleLogout}
              >
                Log Out
              </button>
            )}
          </div>
        ) : (
          <button
            className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200"
            onClick={handleLogin}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
