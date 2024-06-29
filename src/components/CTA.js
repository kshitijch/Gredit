import React from 'react'
import Meet from '../assets/meet.png'
import Brochure from '../assets/brochure.png'
import { HashLink as Link } from 'react-router-hash-link'

const CTA = () => {
    return (
        <div className='bg-gradient-to-b from-white to-blue-100 flex sm:flex-row flex-col  py-6 sm:py-20 px-2' >
            <div
                className=" border border-blue-600  p-10 w-full max-w-4xl rounded-xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
                    <img width={100} src={Meet} alt="" />
                </div>

                <div className="mt-4">
                    <h3 className="text-4xl font-extrabold text-gray-800">Schedule a Meet</h3>
                    <p className="mt-4 text-lg text-gray-500">Have custom requirements?</p>
                    <Link to='#Meet' smooth  ><h1 className='mt-5 text-2xl text-blue-600 font-semibold'>Schedule a Meet</h1></Link>
                </div>
            </div>

            <div
                className=" border border-blue-600 p-10 w-full max-w-lg rounded-xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
                    <img width={100} src={Brochure} alt="" />
                </div>

                <div className="mt-4">
                    <h3 className="text-4xl font-extrabold text-gray-800">Download Brochure</h3>
                    <p className="mt-4 text-lg text-gray-500">Know more about us</p>
                    <h1 className='mt-5   text-2xl text-blue-600 font-semibold'>Download Brochure</h1>
                </div>
            </div>
        </div>
    )
}

export default CTA
