import React from 'react';
import aboutbg from '../components/aboutbg.jpg';
import aboutUsTitle from '../components/aboutUsTitle.png';




const AboutComp = () =>{
    return(
      <>
<section class="text-gray-400 bg-black body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/4">
      </div>
      <div class="p-4 md:w-2/4">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"></img>
          <div class="p-6">
            <h1 class="title-font text-3xl font-medium text-white mb-3">Contact Us</h1>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0" href='link'>
              
              </a>
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-black">
              <button class="inline-flex text-white bg-gradient-to-r from-indigo-500 to-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Email</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/4">
      </div>
    </div>
  </div>
</section>
</>
    )
}

export default AboutComp;