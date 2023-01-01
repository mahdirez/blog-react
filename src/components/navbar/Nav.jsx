import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                ورود
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                ثبت نام
              </Link>
            </li>
          </ul>
        </div>

        <Link className="navbar-brand" to="/">
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
