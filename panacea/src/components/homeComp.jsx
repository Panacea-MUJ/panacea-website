import homebg from '../components/panacea.png';
import panaceaTitle from '../components/panaceaTitle.png';
import React from 'react';



const HomeComp = () =>{
    return(
<section class="text-gray-400 bg-black body-font min-h-[100vh] bg-cover bg-[url('https://i.imgur.com/8EiF0cN.png')]">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-9xl text-3xl mb-4 font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500 hero">Panacea.
      </h1>
      <p class="mb-8 text-xl text-white leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-gradient-to-r from-indigo-500 to-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join Us</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img src={homebg} alt="blogbg" className='h-1/6 rounded' style={{display:"relative", width: "100%", height: "100%"}}></img>
    </div>
  </div>
</section>
    )
}

export default HomeComp;