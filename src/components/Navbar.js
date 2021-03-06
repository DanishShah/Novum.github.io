import React, { useState } from "react";
import { Dribbble, GitHub, Menu, X } from "react-feather";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const navLinks = [
    { path: '/', name: "About Me" },
    { path: '/work', name: "Work" },
    { path: '/design', name: "Design" },
    { path: '/contact', name: "Contact" }
  ]

  return (
    <>
      <div className={`w-full h-16 p-4 sm:flex lg:hidden relative ${mobileNavOpen && 'bg-gray-900'}`}>
        <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          {mobileNavOpen ? <X /> : <Menu />}
        </button>
        <div className={`flex flex-col justify-around items-center absolute top-56-px left-0 w-full h-screen bg-gray-900 transition-all duration-200 z-10 ${mobileNavOpen ? 'block' : 'hidden'}`}>
          <ul className='w-full'>
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path
              return <li key={`${link.name}-${idx}`} className={`${isActive ? 'underline font-semibold' : 'text-gray-600'} p-4 text-center hover:bg-gray-800`}><a datanav="true" href={link.path}>{link.name}</a></li>
            })}
          </ul>
          <div className='flex justify-center'>
            <a datanav="true" className="link mb-4 rounded-full hover:bg-gray-800" target="_blank" rel="noopener noreferrer" href="https://github.com/DanishShah">
              <GitHub />
            </a>
            <a datanav="true" className="link mb-4 rounded-full hover:bg-gray-800" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/da9ish">
              <Dribbble />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden w-48 lg:flex justify-center">
        <ul className="p-0 list-none my-16">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path
            return <li className={isActive ? "leading-6 my-16 rounded-full underline font-semibold" : "leading-6 my-16 rounded-full text-gray-600 hover:text-gray-50 transition-all"} key={`${link.name}-${idx}`}><a datanav="true" href={link.path}>{link.name}</a></li>
          })}
          <li>
            <a datanav="true" className="link mb-4" target="_blank" rel="noopener noreferrer" href="https://github.com/DanishShah">
              <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                <path className="stroke-only" fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </a>
          </li>
          <li>
            <a datanav="true" className="link mb-4" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/da9ish">
              <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                <path className="stroke-only" fill="currentColor" d="M16.42,18.42C16,16.5 15.5,14.73 15,13.17C15.5,13.1 16,13.06 16.58,13.06H16.6V13.06H16.6C17.53,13.06 18.55,13.18 19.66,13.43C19.28,15.5 18.08,17.27 16.42,18.42M12,19.8C10.26,19.8 8.66,19.23 7.36,18.26C7.64,17.81 8.23,16.94 9.18,16.04C10.14,15.11 11.5,14.15 13.23,13.58C13.82,15.25 14.36,17.15 14.77,19.29C13.91,19.62 13,19.8 12,19.8M4.2,12C4.2,11.96 4.2,11.93 4.2,11.89C4.42,11.9 4.71,11.9 5.05,11.9H5.06C6.62,11.89 9.36,11.76 12.14,10.89C12.29,11.22 12.44,11.56 12.59,11.92C10.73,12.54 9.27,13.53 8.19,14.5C7.16,15.46 6.45,16.39 6.04,17C4.9,15.66 4.2,13.91 4.2,12M8.55,5C9.1,5.65 10.18,7.06 11.34,9.25C9,9.96 6.61,10.12 5.18,10.12C5.14,10.12 5.1,10.12 5.06,10.12H5.05C4.81,10.12 4.6,10.12 4.43,10.11C5,7.87 6.5,6 8.55,5M12,4.2C13.84,4.2 15.53,4.84 16.86,5.91C15.84,7.14 14.5,8 13.03,8.65C12,6.67 11,5.25 10.34,4.38C10.88,4.27 11.43,4.2 12,4.2M18.13,7.18C19.1,8.42 19.71,9.96 19.79,11.63C18.66,11.39 17.6,11.28 16.6,11.28V11.28H16.59C15.79,11.28 15.04,11.35 14.33,11.47C14.16,11.05 14,10.65 13.81,10.26C15.39,9.57 16.9,8.58 18.13,7.18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar