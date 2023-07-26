"use client"

import { useState } from "react"
import ListItem from "./ListItem";
  
export default function NavBar() {

    const [open, setOpen] = useState(false);
    
    return (
        <header
          className={`absolute top-0 left-0 z-20 flex items-center w-full bg-transparent backdrop-blur-sm text-white`}
        >
          <div className="container">
            <div className="relative flex items-center justify-between -mx-4">
              <div className="max-w-full px-4 w-60">
                <a href="/#" className="block w-full py-5">
                  <img
                    src="https://github.com/desirablesolutions/blakprint/blob/main/docs/logo.png?raw=true"
                    alt="logo"
                    className="object-contain w-auto h-20"
                  />
                </a>
              </div>
              <div className="flex items-center justify-between w-full px-4">
                <div>
                  <button
                    // @click="navbarOpen = !navbarOpen"
                    onClick={() => setOpen(!open)}
                    // :className="navbarOpen && 'navbarTogglerActive' "
                    id="navbarToggler"
                    className={` ${
                      open && "navbarTogglerActive"
                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                  >
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  </button>
                  <nav
                    // :className="!navbarOpen && 'hidden' "
                    id="navbarCollapse"
                    className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg  py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                      !open && "hidden"
                    } `}
                  >
                    <ul className="block lg:flex">
                      <ListItem
                        navItemStyles="text-dark hover:text-primary"
                        NavLink="/#"
                      >
                        Home
                      </ListItem>
                      <ListItem
                        navItemStyles="text-dark hover:text-primary"
                        NavLink="/#"
                      >
                        Payment
                      </ListItem>
                      <ListItem
                        navItemStyles="text-dark hover:text-primary"
                        NavLink="/#"
                      >
                        About
                      </ListItem>
                      <ListItem
                        navItemStyles="text-dark hover:text-primary"
                        NavLink="/#"
                      >
                        Blog
                      </ListItem>
                    </ul>
                  </nav>
                </div>
                <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
                  <a
                    href="/#"
                    className="py-3 text-base font-medium px-7 text-dark hover:text-primary"
                  >
                    Sign in
                  </a>
    
                  <a
                    href="/#"
                    className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      );
}