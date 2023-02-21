import React from 'react';
import eventData from '../constants/eventData';
import cloneWars from '../images/events/CloneWars.jpg'
import FYI from '../images/events/FYI.jpg'
import panache from '../images/events/panache.jpg'


const Events = () => {
    return (
<section class="text-gray-400 bg-black body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={cloneWars} alt="blog"></img>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{eventData[0].category}</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">{eventData[0].eventTitle}</h1>
            <p class="leading-relaxed mb-3">{eventData[0].summary}</p>
            <div class="flex items-center flex-wrap ">
              {/* <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0" href='link'> */}
              <button class="ml-0 flex mx-auto text-indigo-400  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
              {/* </a> */}
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                Date
              </span>
              <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                Time
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={panache} alt="blog"></img>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{eventData[1].category}</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">{eventData[1].eventTitle}</h1>
            <p class="leading-relaxed mb-3">{eventData[1].summary}</p>
            <div class="flex items-center flex-wrap ">
                   {/* <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0" href='link'> */}
                   <button class="ml-0 flex mx-auto text-indigo-400  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
              {/* </a> */}
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                Date
              </span>
              <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                Time
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={FYI} alt="blog"></img>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{eventData[2].category}</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">{eventData[2].eventTitle}</h1>
            <p class="leading-relaxed mb-3">{eventData[2].summary}</p>
            <div class="flex items-center flex-wrap ">
              {/* <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0" href='link'> */}
              <button class="ml-0 flex mx-auto text-indigo-400  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
              {/* </a> */}
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                Date
              </span>
              <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                Time
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Events;