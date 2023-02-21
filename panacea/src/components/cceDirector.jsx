import React from 'react';
import dhaka from '../images/DhakaSir.jpg'

const CceDirector = () => {
  return (
    <section class="text-gray-400 bg-black body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-3xl font-medium title-font mb-4 text-white pt-8">Director of CCE</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Prof. V S Dhaka is a seasoned academician with a flair for entrepreneurial spirit. He enjoys a persistent passion for continuous learning for self and students’ growth. He has more than 16 years of experience in the software industry, academics, research, teaching, and training. He is a true inspiration to us at Panacea and is a testament to innovation being rewarded.
</p>
        </div>
        <div class="flex flex-wrap -m-4 justify-around">
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src={dhaka}></img>
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">VS Dhaka</h2>
                <h3 class="text-gray-500 mb-3"> Director of CCE</h3>
                <p class="mb-4">Some caption provided by user, 10-15 words</p>
                <span class="inline-flex">
                  <a class="text-gray-700">
                    <i class="fa fa-brands fa-instagram"></i>
                  </a>
                  <a class="ml-2 text-gray-700">
                    <i class="fa fa-brands fa-instagram"></i>
                  </a>
                  <a class="ml-2 text-gray-700">
                  <i class="fa fa-brands fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CceDirector;