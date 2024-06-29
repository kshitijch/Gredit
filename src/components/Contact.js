import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
      <div class=" bg-black py-16 px-6 font-[sans-serif]">
      <div class="max-w-6xl mx-auto text-center text-white">
        <h2 class="md:text-5xl text-4xl font-extrabold mb-12">Get In Touch</h2>
        <p class="text-xl text-gray-300">Be part of our elite community. Get VIP access to curated content, early product releases, and special promotions.</p>
        <div class="bg-[#1f1f1f] shadow-lg rounded-lg p-8 mt-12 flex flex-col items-center justify-center gap-8">
          <input type="text" placeholder="Enter your name" class="w-full md:w-96 bg-transparent border-b-2 border-blue-600 py-3 px-4 text-white  focus:outline-none  " />
          
          <input type="email" placeholder="Enter your email" class="w-full md:w-96 bg-transparent border-b-2 border-blue-600 py-3 px-4 text-base focus:outline-none  " />
          <button class="max-md:mt-6 md:ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded hover:shadow-md hover:transform hover:scale-105 focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
