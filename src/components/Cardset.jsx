import React from 'react'

const Cardset = () => {
  return (
    
    <div class="py-16 bg-white">  
        <div class="container m-auto px-10 text-gray-500 md:px-12 xl:px-0">
            <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                <div class="bg-white border hover:scale-110 transition duration-200  border-[#EDEDFA] rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900">Flexible Scheduling</h3>
                        <p class="mb-6">Stay productive with our flexible scheduling system with our top notch calendar</p>
                        <a href="#" class="block font-medium text-purple-600">Know more</a>
                    </div>
                    <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" class="w-3/4 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                </div>
                <div class="bg-white hover:scale-110 transition duration-200 border border-[#EDEDFA] rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900">Easy Communication</h3>
                        <p class="mb-6">Collaborate seamlessly with your team in real-time, fostering a dynamic work environment where ideas flow freely, tasks are efficiently managed, and collective progress is achieved effortlessly. </p>
                        <a href="#" class="block font-medium text-purple-600">Know more</a>
                    </div>
                    <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" class="w-3/4 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
                </div>
                <div class="bg-white hover:scale-110 transition duration-200 border border-[#EDEDFA] rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900">Analytics</h3>
                        <p class="mb-6">Unlock profound insights and enhance your decision-making with the power of our advanced analytics feature. Elevate your understanding of critical data points, identify trends, and gain a competitive edge through comprehensive data analysis.</p>
                        <a href="#" class="block font-medium text-purple-600">Know more</a>
                    </div>
                    <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Cardset