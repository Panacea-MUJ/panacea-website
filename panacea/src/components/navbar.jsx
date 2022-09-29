import React from 'react';

const Navbar = () => {
    return (
        <div className='flex bg-black'>
            <h1 className='p-4 text-white'>logo</h1>
            <ul className='flex'>
                <li className='p-4 text-white'><a>About</a></li>
                <li className='p-4 text-white'><a>Team</a></li>
                <li className='p-4 text-white'><a>Events</a></li>
                <li className='p-4 text-white'><a>Blog</a></li>
                
            </ul>
        </div>
    )
}

export default Navbar;