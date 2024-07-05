import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import ae from '../assets/ae.png'
import ai from '../assets/ai.png'
import dav from '../assets/dav.png'
import pr from '../assets/pr.png'
import ps from '../assets/ps.png'
import film from '../assets/film.png'


const Hero = () => {
  return (
    <div className=' bg-black' id='Hero'>
      <div className=" z-50 px-6 lg:px-20 pt-5 navbar fixed  bg-black text-white">
        <div className=" navbar-start">
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
      <div className="bg-cover bg-center  md:min-h-[100vh] sm:min-h-[100vh] font-sans bg-black text-white p-6">
        <div className='hidden md:block lg:block:'>
        <img src={ae} className='sm:w-28 w-12 absolute top-24 right-48 hover:scale-110 transition-all ease-in z-0'  alt="" />
        <img src={film} className='sm:w-24 w-12 absolute top-72 right-36 hover:scale-110 transition-all ease-in z-0' alt="" />
        <img src={ai} className='sm:w-28 w-12 absolute bottom-8 right-72 hover:scale-110 transition-all ease-in z-0' alt="" />
        <img src={dav} className='sm:w-28 w-12 absolute top-[29%] left-72 hover:scale-110 transition-all ease-in z-0' alt="" />
        <img src={pr}  className='sm:w-28 w-12 absolute bottom-24 left-48 hover:scale-110 transition-all ease-in z-0' alt="" />
        <img src={ps} className='sm:w-28 w-12 absolute top-32 left-20 hover:scale-110 transition-all ease-in z-0' alt="" />
        </div>
        
        <div className="text-center pt-32 relative max-w-3xl max-md:max-w-md mx-auto">
          <div>
            <p className=" mt-10 text-md font-bold text-blue-600 mb-3 z-[100]"><span className="rotate-90 inline-block mr-2 ">|</span> GREDIT</p>
            <h1 className="md:text-8xl text-7xl font-extrabold mb-4 z-[100]   ">Grow with </h1>
            <h1 className=' border glass  md:text-9xl text-7xl font-extrabold  rounded-full hover:scale-105 transition-all ease-linear z-[100]'>Our <Link to='#Edits' smooth><span className='text-blue-600 '>Edits</span></Link></h1>
            <p className="mt-16  md:text-xl text-md leading-relaxed z-[100]">"Precision Edits, Big Growth: Grow with <span className='text-blue-600'>Gredit</span>"</p>
            <div className='mt-28 sm:mt-28 flex  justify-evenly '>
              <button className="btn md:btn-lg bg-transparent text-white hover:text-black hover:bg-white md:w-56">Download Brochure</button>
              <div className="relative inline-flex  group">
        <div
            className="absolute transition-all text-black duration-1000 opacity-80 -inset-px bg-gradient-to-r from-white via-white to-white rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-100 animate-tilt">
        </div>
        <button href="#" 
            className="relative inline-flex btn md:btn-lg md:w-52   bg-white transition-all duration-200 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >Book a Call
        </button>
    </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
