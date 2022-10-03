import React from 'react';

const HighlightBlog = () => {
    return (
        <section>
        <div className="h-32"></div>
        <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1 bg-cover">
                <div className='w-5/6'>
                    <img className="rounded" src="https://images.unsplash.com/photo-1566338185621-4fa7376c7483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
            <div className="text-sm block my-4 p-3 text-white h-48 w-4/5">
                <h1 className="text-xl">Category</h1>
                <h3 className="text-3xl ">Performance Marketing Agencies Capitalise </h3>
                <h4 className='text-xl'>29<sup>th</sup> September 2022</h4>
            </div>
            </div>
            <div className="w-full px-4 flex-1">
                <div className='w-5/6'>
                    <img className="rounded" src="https://images.unsplash.com/photo-1566338185621-4fa7376c7483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
            <div className="text-sm block my-4 p-3 text-white h-48 w-4/5">
                <h1 className="text-xl">Category</h1>
                <h3 className="text-3xl ">Performance Marketing Agencies Capitalise </h3>
                <h4 className='text-xl'>29<sup>th</sup> September 2022</h4>
            </div>
            </div>
        </div>
        </div>
        </section>
    )
}

export default HighlightBlog;