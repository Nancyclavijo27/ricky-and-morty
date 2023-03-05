import React from "react";
import { NavLink,  } from "react-router-dom";
import "../../App.scss";
import { LoginButton } from "../Login/Logins";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../Login/Logout";
import { Profile } from "../Login/Profile";


const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-light  mb-4 bg-warning ">
      <div className="container">
      {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton/>
          </>
        ) : (
          <LoginButton />
        )}
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
         
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;