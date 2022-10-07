import homebg from '../components/homebg.jpg';
import panaceaTitle from '../components/panaceaTitle.png';
import React from 'react';



const HomeComp = () =>{
    return(
        <>
        <div className="">
            <img src={homebg} alt="homebg" style={{display:"relative", width: "100%", height: "100%"}}></img>
            <div>
                <img className="absolute inset-y-16 h-[20em] pt-56 pl-10" src={panaceaTitle} alt="titlePanacea" />
            <p className='absolute inset-y-[16.5em] text-white text-2xl font-thin pl-[2em]'>Seize the Opportunity</p>

            <button className="absolute text-white inset-y-[30em] inset-x-[10em] rounded-md w-32 h-10 bg-gradient-to-r from-purple-500 to-blue-500">Join Us</button>
            </div>
            
        </div>
        </>
    )
}

export default HomeComp;