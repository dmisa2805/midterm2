import React from 'react';

const NavBar = () => {  
    return (
        <div className='px-8 py-4 flex flex-row justify-between items-center tracking-wide'>
            <h1 className='text-3xl font-bold text-title tracking-widest -mr-64'>Anonime</h1>
            <div className='flex flex-row gap-24 text-subtitle tracking-wide'>
                <div>Home</div>
                <div>List Anime</div>
            </div>
            <input type='search' placeholder='Search anime or movie' className='w-72 flex-shrink-0 px-4 py-2 bg-secondary rounded-3xl text-sm text-subtitle font-light
'></input>
        </div>
    );
  };



export default NavBar;