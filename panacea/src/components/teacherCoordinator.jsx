import React from 'react';
import sumanMam from '../images/SumanMam.jpg';

const Teacher = () => {
    return (
        <section class="text-gray-400 bg-black body-font">
            <div class="container px-5 pb-4 pt-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class='text-3xl font-medium title-font mb-4 text-white'>Teacher Coordinator</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The embodiment of hands-on professionals, our teacher coordinators are our go-to mentors, but their role in our club is so much more than that. Their dedication, creativity and guidance is the driving factor behind the revival of our club.

</p>
                </div>
                <div class="flex flex-wrap -m-4 justify-evenly">
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src={sumanMam}></img>
                            <h2 class="title-font font-medium text-lg text-white">Dr. Suman Bhakar</h2>
                            <h3 class="text-gray-500 mb-3">Teacher Coordinator</h3>
                            <p class="mb-4">..</p>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"></img>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Dr. Sandeep</h2>
            <h3 class="text-gray-500 mb-3"> Teacher Coordinator</h3>
            <p class="mb-4">..</p>
          </div>
        </div>
      </div>
                </div>
            </div>
        </section>
    )
}

export default Teacher;