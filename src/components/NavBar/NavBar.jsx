import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import { FaOpencart} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import logo from '/public/logo.png';

export default function NavBar() {
  return (
    <>
      <header id="nav-wrapper">
        <nav id="nav">
          <div className="nav left">
            <div className="gradient skew">
              <h1 className="logo un-skew">
                <NavLink to={"/"}>
                  <div className="nav-link-a">
                    <span className='TextLogo'>PixelPlay</span>
                    <img className='logoimg' src={logo} alt="" />
                  </div>
                </NavLink>
              </h1>
            </div>
            <button id="menu" className="btn-nav">
              <span className="fas fa-bars"></span>
            </button>
          </div>

          <div className="nav right">
            <NavLink to={"/"} className="nav-link">
              <div className="nav-link-span">
                <div className="u-nav">Inicio</div>
              </div>
            </NavLink>

            <NavLink to={"/category/accion"} className="nav-link">
              <div className="nav-link-span">
                <div className="u-nav">Acción</div>
              </div>
            </NavLink>

            <NavLink to={"/category/aventura"} className="nav-link">
              <div className="nav-link-span">
                <div className="u-nav">Aventura</div>
              </div>
            </NavLink>

            <NavLink to={"/category/rol"} className="nav-link">
              <div className="nav-link-span">
                <div className="u-nav">Rol</div>
              </div>
            </NavLink>

            <NavLink to={"/category/shooter"} className="nav-link">
              <div className="nav-link-span">
                <div className="u-nav">Shooter</div>
              </div>
            </NavLink>

            <div className="nav-link">
              <div className="nav-link-span">
                <div className="u-nav"><FaOpencart /></div>
              </div>
            </div>

          </div>
        </nav>
      </header>

      <div className="content">
        <Outlet />
      </div>
    </>
  )
}
