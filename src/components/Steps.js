import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Star from '../assets/star.svg'

const Steps = () => {
    return (
        <div className='bg-black py-20 rounded-b-badge' id='Step'>
            <div className='px-2 flex justify-center text-center text-white py-28 sm:text-7xl text-4xl font-bold'><div><img className="absolute sm:w-16 " src={Star} alt="" /><h1 className=''><span className=' relative text-blue-700 font-extrabold sm:text-8xl text-5xl'>Simple </span>5-step process</h1><h1 className=''>to make your brand <span className='sm:text-8xl text-5xl text-blue-700 font-extrabold'>Go Big!</span></h1></div></div>
            <VerticalTimeline >
                <VerticalTimelineElement
                    className="vertical-timeline-element text-right"
                    contentStyle={{ boxShadow: "none", backgroundColor: "black" }}
                    contentArrowStyle={{ border: "black" }}
                    iconStyle={{ scale: "0.3", backgroundColor: "white" }}
                >
                    <h3 style={{
                        WebkitTextStrokeWidth: '2px',
                        WebkitTextStrokeColor: 'rgb(33, 150, 243)',
                    }} className="text-9xl font-extrabold text-transparent ">01</h3>
                    <h4 className="sm:text-6xl text-3xl text-nowrap font-semibold text-white">Initial Consultation</h4>
                    <h1 className='text-[#858485] pt-4 text-lg'>
                        We begin with a detailed discussion to understand your vision, goals, and specific requirements. Share your footage and ideas with us to ensure we're aligned from the start.
                    </h1>
                </VerticalTimelineElement>



                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    contentArrowStyle={{ border: "black" }}
                    contentStyle={{ boxShadow: "none", backgroundColor: "black" }}
                    iconStyle={{ scale: "0.3", backgroundColor: "white" }}

                >
                    <h3 style={{
                        WebkitTextStrokeWidth: '2px',
                        WebkitTextStrokeColor: 'rgb(33, 150, 243)',
                    }} className="text-9xl font-extrabold text-transparent">02</h3>
                    <h4 className="sm:text-6xl text-3xl text-nowrap font-semibold text-white">Footage Review</h4>
                    <h1 className='text-[#858485] pt-4 text-lg'>
                        We review your provided footage, assessing quality and content. We'll create a storyboard or outline to plan the editing process effectively.
                    </h1>
                </VerticalTimelineElement>



                <VerticalTimelineElement
                    className="vertical-timeline-element text-right"
                    contentArrowStyle={{ border: "black" }}
                    contentStyle={{ boxShadow: "none", backgroundColor: "black" }}
                    iconStyle={{ scale: "0.3", backgroundColor: "white" }}

                >
                    <h3 style={{
                        WebkitTextStrokeWidth: '2px',
                        WebkitTextStrokeColor: 'rgb(33, 150, 243)',
                    }} className="text-9xl font-extrabold text-transparent">03</h3>
                    <h4 className="sm:text-6xl text-3xl text-nowrap font-semibold text-white">Editing</h4>
                    <h1 className='text-[#858485] pt-4 text-lg'>
                        Our skilled editors cut and trim the footage, add transitions, music, and other elements to create a polished video that meets your objectives.
                    </h1>
                </VerticalTimelineElement>



                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    contentArrowStyle={{ border: "black" }}
                    contentStyle={{ boxShadow: "none", backgroundColor: "black" }}
                    iconStyle={{ scale: "0.3", backgroundColor: "white" }}

                >
                    <h3 style={{
                        WebkitTextStrokeWidth: '2px',
                        WebkitTextStrokeColor: 'rgb(33, 150, 243)',
                    }} className="text-9xl font-extrabold text-transparent">04</h3>
                    <h4 className="sm:text-6xl text-3xl text-nowrap font-semibold text-white">Review and Revisions</h4>
                    <h1 className='text-[#858485] pt-4 text-lg'>
                        We'll share the initial edit for your review. Provide feedback and request changes. We make adjustments until you're completely satisfied.
                    </h1>
                </VerticalTimelineElement>




                <VerticalTimelineElement
                    className="vertical-timeline-element text-right"
                    contentArrowStyle={{ border: "black" }}
                    contentStyle={{ boxShadow: "none", backgroundColor: "black" }}
                    iconStyle={{ scale: "0.3", backgroundColor: "white" }}
                >
                    <h3 style={{
                        WebkitTextStrokeWidth: '2px',
                        WebkitTextStrokeColor: 'rgb(33, 150, 243)',
                    }} className="text-9xl font-extrabold text-transparent">05</h3>
                    <h4 className="sm:text-6xl text-3xl text-nowrap font-semibold text-white">Final Delivery</h4>
                    <h1 className='text-[#858485] pt-4 text-lg'>
                        Once approved, we deliver the final video in your desired format. We also offer support for uploading and sharing your video.
                    </h1>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}

export default Steps
