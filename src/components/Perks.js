import React from 'react'
import Star from '../assets/star.svg'
import Price from '../assets/price-tag.gif'
import Colab from '../assets/humanitarian.gif'
import Trust from '../assets/trusted.gif'
import Fast from '../assets/fast.gif'
import Activity from '../assets/activities.gif'
import Edit from '../assets/edit.gif'

const Perks = () => {
    return (
        <div className=' py-20'>
            <div className='px-2 flex justify-center text-center text-black pt-28 pb-32 sm:text-7xl text-4xl font-bold'><div><img width={130} className="absolute sm:w-16 " src={Star} alt="" /><h1><span className=' relative text-blue-700 font-extrabold sm:text-8xl text-5xl'>Perks </span>So Good</h1><h1>you will never go back</h1></div></div>

            <div class="max-w-6xl mx-auto font-[sans-serif] text-[#333]">

                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-16">
                    <div class="p-4 flex flex-col items-center text-center">
                        <img width={130} src={Trust} alt="" />
                        <h3 class="text-xl text-black font-bold my-3">Professional Quality, Every Time</h3>
                        <p class=" text-md">Our skilled editors ensure top-notch video quality that captivates your audience.</p>
                    </div>
                    <div class="p-4 flex flex-col items-center text-center">
                        <img width={130} src={Fast} alt="" />
                        <h3 class="text-xl text-black font-bold my-3">Fast Turnaround, No Compromises</h3>
                        <p class=" text-md">We prioritize efficiency without sacrificing creativity. Get your videos promptly.</p>
                    </div>
                    <div class="p-4 flex flex-col items-center text-center">
                        <img width={130} src={Edit} alt="" />
                        <h3 class="text-xl text-black font-bold my-3">Customization at Your Fingertips</h3>
                        <p class=" text-md">Tailor-made editing to match your unique vision. Your style, our expertise.</p>
                    </div>
                    <div class="p-4 flex flex-col items-center text-center">
                        <img width={130} src={Price} alt="" />
                        <h3 class="text-xl text-black font-bold my-3">Affordable Pricing, Premium Results</h3>
                        <p class=" text-md">Quality editing doesn’t break the bank. We offer competitive rates.</p>
                    </div>
                    <div class="p-4 flex flex-col items-center text-center">
                        <img width={130} src={Colab} alt="" />
                        <h3 class="text-xl text-black font-bold my-3">Collaborative Approach, Your Input Matters</h3>
                        <p class=" text-md">We involve you throughout the process. Your feedback shapes the final product.</p>
                    </div>
                    <div class="p-4 flex flex-col items-center text-center">
                        <img width={130} src={Activity} alt="" />
                        <h3 class="text-xl text-black font-bold my-3">Diverse Expertise, Any Video Type</h3>
                        <p class=" text-md">From promos to vlogs, events to documentaries—we handle it all.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perks
