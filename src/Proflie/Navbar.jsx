import React, { useState} from 'react'
import {FaBars} from 'react-icons/fa'

function Navbar() {
  const [toggle, setToggle] = useState(false);

    const upDateToggle = () =>{
        setToggle(!toggle)
    }
  return (
    <nav className='bg-purple-800 sticky top-0 z-50'>
        <div className='container max-w-[1320px] relative h-auto p-10 mx-auto flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]'>
            <div>
                <h2 className='text-[2.75rem] text-lime-400 cursor-pointer hover:scale-110 transition-transform duration-300' style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.5)' }}>My Profile</h2>
            </div>

            <ul className={`${!toggle ? 'hidden' : 'flex'}  flex my-5 md:flex flex-col md:flex-row `}>
          <li className='md:mx-4 my-2'><a className='relative inline-block text-white
                                        after:content-[""] after:absolute after:left-0 after:bottom-0
                                        after:h-[2px] after:w-0 after:bg-black
                                        after:transition-all after:duration-300
                                        hover:after:w-full hover:text-red-400' href="#Home">Home</a></li>
                <li className='md:mx-4 my-2'><a className='relative inline-block text-white
                                        after:content-[""] after:absolute after:left-0 after:bottom-0
                                        after:h-[2px] after:w-0 after:bg-black
                                        after:transition-all after:duration-300
                                        hover:after:w-full hover:text-red-400' href="#aboutMe">About Me</a></li>
                <li className='md:mx-4 my-2 '><a className='relative inline-block text-white
                                        after:content-[""] after:absolute after:left-0 after:bottom-0
                                        after:h-[2px] after:w-0 after:bg-black
                                        after:transition-all after:duration-300
                                        hover:after:w-full hover:text-red-400' href="#Performance">Performance</a></li>
                <li className='md:mx-4 my-2 '><a className='relative inline-block text-white
                                        after:content-[""] after:absolute after:left-0 after:bottom-0
                                        after:h-[2px] after:w-0 after:bg-black
                                        after:transition-all after:duration-300
                                        hover:after:w-full hover:text-red-400' href="#Activity">Activity</a></li>
            </ul>

        

        {/* hamburger Icon  */}
        <FaBars onClick={upDateToggle} className='absolute right-5 cursor-pointer  text-xl md:hidden' />
        </div>
    </nav>
  )
}

export default Navbar