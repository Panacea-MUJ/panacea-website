import React from 'react';
import panacea from './panacea.png';
import search from './search.png';
=======
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className='flex bg-black'>
            <img className="rounded min-h-fit h-12 mt-2" src={panacea} alt="" />
            <ul className='flex mt-2'>
                <li className='p-4 text-white'><a>About</a></li>
                <li className='p-4 text-white'><a>Team</a></li>
                <li className='p-4 text-white'><a>Events</a></li>
                <li className='p-4 text-white'><a>Blog</a></li>
                <Link className='p-4 text-white' to="/home">Home</Link>
                <Link className='p-4 text-white' to="/about">About</Link>
                <Link className='p-4 text-white' to="/team">Team</Link>
                <Link className='p-4 text-white' to="/events">Events</Link>
                <Link className='p-4 text-white' to="/blog">Blog</Link>
            </ul>
            <img className="rounded min-h-fit h-7 mt-5 mr-5 absolute top-0 right-0" src={search} alt="" />
        </div>
        

        </>
    )
}

export default Navbar;