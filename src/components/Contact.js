import React from 'react'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d75470b7-1a3a-4ad6-bde3-f8178050bd51");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id='Contact'>
      <form onSubmit={onSubmit}>
      <div class=" bg-black py-16 px-6 font-[sans-serif]">
      <div class="max-w-6xl mx-auto text-center text-white">
        <h2 class="md:text-6xl text-4xl font-extrabold mb-12">Get In <span className='text-blue-600'>Touch</span></h2>
        <p class="text-xl text-gray-300">Any Personal Request? Contact Us.</p>
        <div class="bg-[#1f1f1f] shadow-lg rounded-lg p-8 mt-12 flex flex-col items-center justify-center gap-8">
          <input type="text" required placeholder="Enter your name" class="w-full md:w-96 bg-transparent border-b-2 border-blue-600 py-3 px-4 text-white    " />
          
          <input type="email" required placeholder="Enter your email" class="w-full md:w-96 bg-transparent border-b-2 border-blue-600 py-3 px-4 text-base   " />

          <textarea name="message" placeholder='Your Message' required className='mt-4 rounded-lg md:w-96 w-full px-4 py-8 bg-[#1f1f1f] border border-blue-600'></textarea>
          <button type='submit' class="max-md:mt-6 md:ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded hover:shadow-md hover:transform hover:scale-105 focus:outline-none">
            Get Started
          </button>
          <p className='text-gray-400'>{result}</p>
        </div>
      </div>
    </div>
    </form>
    
    </div>
  )
}


