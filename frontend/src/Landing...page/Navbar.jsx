import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav
      class="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img
            src="media\images\logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/support">
                  Support
                </Link>
              </li>
              <li class="nav-item" style={{ cursor: "pointer" }}>
                <Link class="nav-link active text-muted" to="#">
                  <div onClick={() => setOpen(!open)}>
                    <i class="fa-solid fa-bars"></i>
                  </div>
                  {open && (
                    <div
                      style={{
                        position: "absolute",
                        top: "60px",
                        right: "100px",
                        background: "white",
                        padding: "15px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        width: "120px",
                      }}
                    >
                      {token ? (
                        <Link class="text-muted" to="#">
                        <button onClick={handleLogout}>Logout</button>
                        </Link>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <Link class="text-muted" to="/login">Login</Link>

                          <Link class="text-muted" to="/signup">Signup</Link>
                        </div>
                      )}
                    </div>
                  )}
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
