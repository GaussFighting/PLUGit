import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../styles/images/logo.png";
import topImage from "../styles/images/electricians.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="navigation p-0" expand="md">
        <NavbarBrand className="logo-link" href={"index.html"}>
          {" "}
          <img
            alt="logo"
            src={logo}
            style={{
              height: 100,
              width: 200,
              padding: 0,
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="nav-toggler mx-3" />
        <Collapse isOpen={isOpen} navbar className="flex-row-reverse">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link-custom" href="#about">
                O NAS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-custom" href="#offer">
                OFERTA
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-custom" href="#contact">
                KONTAKT
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div
        className="top-image"
        style={{
          backgroundImage: `url(${topImage})`,
          backgroundPosition: `center 27%`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
};
export default Navigation;
