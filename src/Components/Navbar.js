import React from "react";
import Signin from "./Signin";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid my-2">
        <img src={logo} width="50px" height="50px"></img>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="navbar-brand font-weight-bold text-dark" href="/home">
          <h1>Writer.ly</h1>
        </a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link text-dark font-weight-bold"
              aria-current="page"
              href="#"
            >
              Why Writer.ly
            </a>
          </li>
          <li>
            <a
              class="nav-link text-dark font-weight-bold"
              aria-current="page"
              href="#"
            >
              Features
            </a>
          </li>
          <li>
            <div class="nav-label">
              <Link
                to="/plans"
                class="nav-link text-dark font-weight-bold"
                href="#"
              >
                Plans
              </Link>
            </div>
          </li>
        </ul>
        <div className="navbar-nav">
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="collapseNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  to="/Signupdetails"
                  href="/"
                  className="nav-item nav-link text-dark h6 mx-3 my-auto"
                >
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/login"
                  href="/"
                  className="nav-item nav-link text-dark h6 mx-3 my-auto"
                >
                  login
                </Link>
              </li>
            </ul>

            <button className="btn btn-warning ml-auto">download</button>
          </div>
          <button
            className="navbar-toggler text-absolute"
            data-toggle="collapse"
            data-target="#collapseNav"
          >
            <span className="fas fa-bars"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
