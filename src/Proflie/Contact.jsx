import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaFacebook, FaLine} from 'react-icons/fa6'


function Contact() {
  return (
    <div className='bg-black'>
        <div className='container max-w-[1320px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 p-4 md:h-[250px]'>
            <div className='flex justify-center md:justify-start'>
                <ul className='flex flex-row gap-6'>
                    <li className='hover:scale-110 transition-transform duration-300'><a className='text-[2rem] md:text-[4.5rem] text-white' href=""><FaInstagram /></a></li>
                    <li className='hover:scale-110 transition-transform duration-300'><a className='text-[2rem] md:text-[4.5rem] text-white' href=""><FaFacebook /></a></li>
                    <li className='hover:scale-110 transition-transform duration-300'><a className='text-[2rem] md:text-[4.5rem] text-white' href=""><FaLine /></a></li>
                </ul>
            </div>
              <div className='w-full md:w-auto'>
                  <h4 className='text-[1rem] md:text-[1.25rem] text-white font-semibold'>ติดต่อทาง Email</h4>
                  <form action="" className='flex mt-2 w-full md:w-auto'>
                      <div className='relative w-full md:w-[320px]'>
                          <input type="text" className='w-full bg-white/20 text-white text-[0.875rem] px-3 py-2 rounded-md' placeholder='ส่งข้อความทางอีเมล' />
                          <button className='absolute top-2 right-2 cursor-pointer' type='submit'> <FaRegPaperPlane className='text-white ' /></button>
                      </div>
                  </form>
              </div>
        </div>
    </div>
  )
}

export default Contact