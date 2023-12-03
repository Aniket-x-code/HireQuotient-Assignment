import React from 'react'

const Avatarblock = () => {
  return (
    <div class="flex h-screen items-center justify-center bg-gray-50">
      <div class="w-full md:w-1/2 rounded-lg bg-white px-8 py-4 shadow-md m-4">
        <div class="px-1 py-4">
          <h3 class="font-bold text-2xl font-sans">Share with others</h3>
        </div>
          <ul class="grid grid-cols-4 gap-2 px-1">
            <li class="flex items-center flex-col">
              <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" class="rounded-full w-16 h-16 object-cover"/>
              <h5 class="font-semibold">Alex</h5>
            </li>
              <li class="flex items-center flex-col">
              <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="" class="rounded-full w-16 h-16 object-cover"/>
              <h5 class="font-semibold">Sarah</h5>
            </li>
              <li class="flex items-center flex-col">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" class="rounded-full w-16 h-16 object-cover"/>
              <h5 class="font-semibold">Jericho</h5>
            </li>
       
              <li class="flex items-center flex-col">
              <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="" class="rounded-full w-16 h-16 object-cover"/>
              <h5 class="font-semibold">Dianna</h5>
            </li>
             <li class="flex items-center flex-col">
              <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="" class="rounded-full w-16 h-16 object-cover"/>
              <h5 class="font-semibol">Bernard</h5>
            </li>
              <li class="flex items-center flex-col">
              <img src="https://randomuser.me/api/portraits/women/19.jpg" alt="" class="rounded-full w-16 h-16 object-cover"/>
              <h5 class="font-semibold">Francis</h5>
            </li>
              <li class="flex items-center flex-col">
              <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" class="rounded-full w-16 h-16 object-cover"/>
              <h5 class="font-semibold">Edna</h5>
            </li>
             <li>
              <li class="flex items-center flex-col">
              <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="" class="rounded-full w-16 h-16 object-cover"/>
              <h5 class="font-semibold">Carson</h5>
            </li>
            </li>
            </ul>
    </div>
    </div>
    )
  }
export default Avatarblock