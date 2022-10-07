import React from 'react';
import eventsbg from '../components/eventsbg.jpg';
import blogsTitle from '../components/blogsTitle.png';




const BlogComp = () =>{
    return(
        <>
        <div className="">
            <img src={eventsbg} alt="homebg" className='h-2/6' style={{display:"relative"}}></img>
            <div>
                <img className="absolute inset-y-16 h-[20em] pt-56 pl-10" src={blogsTitle} alt="titlePanacea" />
            <p className='absolute inset-y-[16.5em] text-white text-2xl font-thin pl-[2em]'>Latest information on all our events.</p>

            <button className="absolute text-white inset-y-[30em] inset-x-[10em] rounded-md w-32 h-10 bg-gradient-to-r from-purple-500 to-blue-500">Join Us</button>
            </div>
            
        </div>
        </>
    )
}

export default BlogComp;