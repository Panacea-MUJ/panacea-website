import React from 'react';
import samyak from '../images/Samyak.png'
import riya from '../images/RiyaSharma.jpg'
import tanuj from '../images/tanujKothari.jpg'

const Team = () => {
  return (
    <section class="text-gray-400 bg-black body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-3xl font-medium title-font mb-4 text-white">EXECUTIVE</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The cream of the crop, our executive team represents true innovation, persistence and a commitment to perfection like no one else. The brains behind our operations, they provide the overhead insight into the integration among the different teams in our club</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src={tanuj}></img>
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">Tanuj Kothari</h2>
                <h3 class="text-gray-500 mb-3">President</h3>
                <p class="mb-4">Some caption provided by user, 10-15 words</p>
                <span class="inline-flex">
                  <a class="text-gray-700">
                  <i class="fa fa-brands fa-instagram"></i>
                  </a>
                  <a class="ml-2 text-gray-700">
                    <i class="fa fa-brands fa-twitter"></i>
                  </a>
                  <a class="ml-2 text-gray-700">
                   <i class="fa fa-brands fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="https://dummyimage.com/200x200"></img>
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">Saarang</h2>
                <h3 class="text-gray-500 mb-3"> Vice President</h3>
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
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src={riya}></img>
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">Riya Sharma</h2>
                <h3 class="text-gray-500 mb-3">General Secretary</h3>
                <p class="mb-4">Dum Spiro Spero</p>
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
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src={samyak}></img>
        
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">Samyak Jain</h2>
                <h3 class="text-gray-500 mb-3">Treasurer</h3>
                <p class="mb-4">Great teams are led by great leaders, and great leaders are led by great values</p>
                <span class="inline-flex">
                  <a class="text-gray-700">
                   <i class="fa fa-brands fa-linkedin"></i>
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

export default Team;