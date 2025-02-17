import React from 'react'
import Marquee from 'react-fast-marquee'

const Clients = () => {
  return (
    <div className='bg-black'>
        <Marquee autoFill gradient gradientColor='black' direction='right' gradientWidth={200} className='py-20  overflow-hidden  bg-black text-white font-extrabold  md:text-8xl text-6xl '>
        <h1 className="px-32  text-transparent  transition-colors duration-300 hover:text-white"
          style={{
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: 'white',
          }}>Clients</h1>

      </Marquee>

      <div class="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl sm:max-w-full">
      

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] hover:-translate-y-2 transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product1.webp" alt="Product 1"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">Lexicon Luxe | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$10</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

       
        <div class="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] hover:-translate-y-2  transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product7.webp" alt="Product 3"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">Verbal Vogue Tees | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$12</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] hover:-translate-y-2 transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product5.webp" alt="Product 3"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">Jargon Jungle | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$15</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] hover:-translate-y-2 transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product6.webp" alt="Product 3"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">Syllable Streetwear | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$14</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Clients
