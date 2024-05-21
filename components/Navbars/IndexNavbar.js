import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow navbar-expand-lg">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed uppercase text-blueGray-700 whitespace-nowrap"
                href="#pablo"
              >
                Template
              </a>
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col mr-auto list-none lg:flex-row">
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700 lg:py-2"
                  href="#1"
                >
                  <i className="mr-2 text-lg text-blueGray-400 far fa-file-alt leading-lg" />{" "}
                  Docs
                </a>
              </li>
            </ul>
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700 lg:py-2"
                  href="#1"
                  target="_blank" rel="noreferrer"
                >
                  <i className="text-lg text-blueGray-400 fab fa-facebook leading-lg " />
                  <span className="inline-block ml-2 lg:hidden">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700 lg:py-2"
                  href="#1"
                  target="_blank" rel="noreferrer"
                >
                  <i className="text-lg text-blueGray-400 fab fa-twitter leading-lg " />
                  <span className="inline-block ml-2 lg:hidden">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700 lg:py-2"
                  href="#1"
                  target="_blank"  rel="noreferrer"
                >
                  <i className="text-lg text-blueGray-400 fab fa-github leading-lg " />
                  <span className="inline-block ml-2 lg:hidden">Star</span>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
