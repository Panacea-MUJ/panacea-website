import React from 'react';
import aboutbg from '../components/aboutbg.jpg';
import aboutUsTitle from '../components/aboutUsTitle.png';




const StudyComp = () =>{
    return(
      <>
      <section
    class="z-40 min-h-[100vh] relative text-neutral-50 pt-16 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto grid grid-cols-1 gap-8 lg:grid-cols-12 relative bg-cover bg-[url('https://i.imgur.com/hc5uuPd.jpeg')]">
    <div
      class="col-span-6 xl:place-self-top mb-8 pt-[20%] xl:mt-0 lg:mb-0 z-50"
    >
      <h1
        class="title-font sm:text-8xl text-7xl mb-4 font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500 hero"
      >
        Resources
      </h1>
      <p
        class="my-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left opacity-100 text-xl"
      >
        Study with us.
      </p>
      <div class="flex flex-col lg:flex-row items-center">
      {/* <button class="inline-flex text-white bg-gradient-to-r from-indigo-500 to-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join Us.</button> */}
      </div>
    </div>
  </section>
      </>
    )
}

export default StudyComp;