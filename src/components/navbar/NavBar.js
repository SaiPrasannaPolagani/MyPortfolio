import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { SocialIcon } from "react-social-icons";
const NavBar = () => {
  return (
    <header>
      <div className="top">
        <nav>
          <ul>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                margin: 10,
                fontSize: 36,
                fontFamily: "Amantic SC",
                fontStyle: "italic",
                color: "ivory",
              }}
            >
              {" "}
              Prasanna{" "}
            </Link>

            <Link to="/projects" style={{ textDecoration: "none", margin: 10 }}>
              {" "}
              Projects{" "}
            </Link>
            <Link to="/contact" style={{ textDecoration: "none", margin: 10 }}>
              {" "}
              Contact{" "}
            </Link>
          </ul>
        </nav>
        <div
          className="
          icons"
        >
          <SocialIcon
            url="https://www.linkedin.com/in/sai-prasanna-polagani04/"
            target="_blank"
            fgColor="#fff"
            style={{ marginRight: 20 }}
          />
          <SocialIcon
            url="https://github.com/SaiPrasannaPolagani"
            target="_blank"
            fgColor="#fff"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
