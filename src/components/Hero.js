import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const Hero = () => {
  return (
    <div className=' bg-black' id='Hero'>
      <div className="px-16 pt-5 navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
              <li><Link to='#Edits'>Edits</Link></li>
              <li><Link to='#Step'>Services</Link></li>
              <li><Link to='#Testi'>Clients</Link></li>
              <li><Link to='#Contact'>Contact Us</Link></li>
              <li><Link to=''>Download Brochure</Link></li>
            </ul>
          </div>
          <h1 className="btn btn-ghost text-2xl">Gredit</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link  className='text-xl hover:text-blue-600' to='#Edits' smooth>Edits</Link></li>
            <li><Link className='text-xl hover:text-blue-600' to='#Step' smooth>Services</Link></li>
            <li><Link className=' text-xl hover:text-blue-600'to='#Testi' smooth>Clients</Link></li>
            <li><Link className='text-xl hover:text-blue-600' to='#Contact'smooth>Contact Us</Link></li>
          </ul>

        </div>
        <div className="navbar-end hidden lg:flex">
          <Link to='#' className="btn btn-md">Download Brochure</Link>
        </div>
      </div>
      <div className="bg-cover bg-center   font-sans bg-black text-white p-6">
        <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
          <div>
            <p className=" mt-10 text-md font-bold text-blue-600 mb-3"><span className="rotate-90 inline-block mr-2">|</span> GREDIT</p>
            <h2 className="md:text-9xl text-7xl font-extrabold mb-4 hover:scale-110 transition-all ">Grow with </h2>
            <h1 className=' border glass  md:text-[17vh] text-7xl font-extrabold  rounded-full hover:scale-110 transition-all'>Our <span className='text-blue-600'>Edits</span></h1>
            <p className="mt-16  md:text-xl text-md leading-relaxed">"Precision Edits, Big Growth: Grow with <span className='text-blue-600'>Gredit</span>"</p>
            <div className='mt-28 sm:mt-40 flex  justify-evenly '>
              <button className="btn md:btn-lg bg-transparent text-white hover:text-black hover:bg-white md:w-56">Download Brochure</button>
              <button className="btn md:btn-lg md:w-52  hover:bg-transparent hover:text-white">Book a Call</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
