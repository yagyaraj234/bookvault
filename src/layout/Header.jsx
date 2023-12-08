import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItem = useSelector((state) => state?.cartSlice?.item);

  return (
    <div className="navbar  border-b bg-gray-800 border-gray-700">
      <div className="flex-1 text-gray-300">
        <NavLink to="/" className="text-xl font-bold ml-5 hover:text-white">
        BookVault
        </NavLink>
      </div>
      <div className="flex-none text-gray-200 ">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cartItem?.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52  shadow-2xl bg-gray-800 border border-gray-800"
          >
            <div className="card-body">
              <span className="font-bold text-lg">
                {cartItem?.length} Items
              </span>
              <NavLink to="/cart" className="card-actions">
                <button className="btn bg-blue-600 border-none text-white btn-block">View cart</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
              />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Header;
