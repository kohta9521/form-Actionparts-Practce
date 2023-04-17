import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          {/* <img
            src={logo}
            className="nav-logo"
            alt="Logo."
            onClick={this.scrollToTop}
          /> */}
          <ul className="nav-items">
            {/* <li className="nav-item">Section 1</li> */}
            <Link 
              activeClass="active"
              className="nav-item"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              section1
            </Link>
            <Link 
              activeClass="active"
              className="nav-item"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              section2
            </Link>
            <Link 
              activeClass="active"
              className="nav-item"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              section3
            </Link>
            <Link 
              activeClass="active"
              className="nav-item"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              section4
            </Link>
            <Link 
              activeClass="active"
              className="nav-item"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              section5
            </Link>
            {/* <li className="nav-item">Section 2</li>
            <li className="nav-item">Section 3</li>
            <li className="nav-item">Section 4</li>
            <li className="nav-item">Section 5</li> */}
          </ul>
        </div>
      </nav>
    );
  }
}