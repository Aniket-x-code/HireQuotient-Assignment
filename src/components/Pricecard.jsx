import React from 'react'

const Pricecard = () => {
  return (

    <div class="bg-white  py-8 mt-8 px-24  items-center justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
    
        <div class="bg-[#EDEDFA] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div class="p-1 bg-blue-200">
          </div>
          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Free Plan</h2>
            <p class="text-gray-600 mb-6">Ideal for small businesses</p>
            <p class="text-6xl font-bold text-gray-800 mb-6">$0<span className='text-xl'>/month</span></p>
            <ul class="text-sm text-gray-600 mb-4">
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Access to all basic features
              </li>
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Reporting and analytics
              </li>
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Up to 5 individual users
              </li>
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Chat and email support
              </li>
              
            </ul>
          </div>
          <div class="p-4 mt-16">
            <button
              class="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Get Started
            </button>
          </div>
        </div>
    
   {/* {     <!-- Pricing Card 2 -->} */}
        <div class="bg-black text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div class="p-1 bg-[#FE8162]">
          </div>
          <div class="p-8">
            <h2 class="text-3xl font-bold text-white mb-4">Standard Plan</h2>
            <p class="text-white mb-6">Perfect for growing businesses</p>
            <p class="text-6xl font-bold text-white mb-6">$25<span className='text-xl'>/month</span></p>
            <ul class="text-sm text-white mb-6">
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                25 Users
              </li>
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Access to all basic features
              </li>
              <li class="flex mb-2 items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Chat and email support
              </li>
              <li class="flex mb-2 items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Reporting and analytics
              </li>
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                3+ integrations
              </li>
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Account performance reporting
              </li>
            </ul>
          </div>
          <div class="p-4">
            <button
              class="w-full bg-[#FE8162] text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
              Get Started
            </button>
          </div>
        </div>
    
    {/* {     <!-- Pricing Card 3 -->} */}
        <div class="bg-[#EDEDFA] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div class="p-1 bg-purple-200">
          </div>
          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Buissness Plan</h2>
            <p class="text-gray-600 mb-6">For large-scale enterprises</p>
            <p class="text-6xl font-bold text-gray-800 mb-6">$42<span className='text-xl'>/month</span></p>
            <ul class="text-sm text-gray-600 mb-6">
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Up to 5 individual users
              </li>
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http
    
    ://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Chat and email support
              </li>
              
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 Priority Support
              </li>
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Reporting and analytics
              </li>
              <li class="mb-2 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                3+ integrations
              </li>
              
              
            </ul>
          </div>
          <div class="p-4 mt-8">
            <button
              class="w-full bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
               Get Started
            </button>
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default Pricecard