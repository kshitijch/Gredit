import React from 'react'
import ECell from '../assets/E-CELL LOGO.png'
import Marquee from "react-fast-marquee";




const Testimonials = () => {
    return (
        <div id='Testi'>

<Marquee autoFill gradient gradientColor='black' gradientWidth={200} className='pt-44 pb-24 overflow-hidden  bg-black text-white font-extrabold  md:text-8xl text-6xl '>
        <h1 className="px-32  text-transparent  transition-colors duration-300 hover:text-white"
          style={{
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: 'white',
          }}>Testimonials</h1>

      </Marquee>

            <section className="py-12 bg-black sm:py-12 lg:py-12" >
                <div className="px-4 mx-auto max-w-[85vw] sm:px-8 lg:px-12">
                    <div className="flex flex-col items-center">
                    
                        <div className="relative mt-10 md:mt-24 md:order-2">
                            <div className="absolute  -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                                <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600"
                                ></div>
                            </div>

                            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
                                <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl hover:-translate-y-2 transition-all ease-linear">
                                    <div className=" flex flex-col justify-between flex-1 p-6 bg-gray-950 lg:py-8 lg:px-7 ">
                                        <div className="flex-1">


                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-white font-pj">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-white font-pj">Leslie Alexander</p>
                                                <p className="mt-0.5 text-sm font-pj text-gray-600">Freelance React Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl hover:-translate-y-2 transition-all ease-linear">
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-gray-950 lg:py-8 lg:px-7">
                                        <div className="flex-1">



                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-white font-pj">“Gredit provided exceptional video editing services for E-Cell, that organises Central India's largest entrepreneurship event. Their creative expertise and attention to detail resulted in stunning videos that effectively conveyed our message. Professional and responsive, they met tight deadlines without compromising on quality. Highly recommended for top-notch video editing.”</p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={ECell} alt="" />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-white font-pj">ECell MANIT</p>
                                                <p className="mt-0.5 text-sm font-pj text-gray-600"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl hover:-translate-y-2 transition-all ease-linear">
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-gray-950 lg:py-8 lg:px-7">
                                        <div className="flex-1">


                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-white font-pj">“Gredit has enhanced VYGR India's YouTube and Instagram with fast, precise, and visually appealing edits, expert graphics and subtitles, and responsive feedback handling. Highly recommended for top-tier video editing.”</p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-white font-pj">VYGR</p>
                                                <p className="mt-0.5 text-sm font-pj text-gray-600"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Testimonials
