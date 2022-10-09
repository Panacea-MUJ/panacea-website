import React from 'react';

const Load = () => {
    return (
        <section className='pb-64'>
        <div className="h-32"></div>
        <div className="grid grid-cols-8 gap-2">
            <div className="col-span-4">
                <h1 className="pl-10 font-black text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#4A00E0] to-[#4ACBE0]">Newsletter</h1>
            </div>
        <div className="col-span-3 w-full">
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Email"
            class=" w-full h-11 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            /> 
        </div>
        <div className='col-span-1'>
            <button class="text-[#7F7FD5] border border-[#86A8E7] hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
             Subscribe
            </button>
        </div>
        </div>
        </section>
    )
}

export default Load;