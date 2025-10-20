import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaFacebook, FaLine} from 'react-icons/fa6'


function Contact() {
  return (
    <div className='bg-black'>
        <div className='container max-w-[1320px] mx-auto flex md:justify-between md:items-center h-[250px]'>
            <div>
                <ul className='flex flex-row mr-10 mt-25 md:mt-0 ml-10'>
                    <li className='mr-10 hover:scale-110 transition-transform duration-300'><a className='text-[4.50rem] text-white' href=""><FaInstagram /></a></li>
                    <li className='mr-10 hover:scale-110 transition-transform duration-300'><a className='text-[4.50rem] text-white' href=""><FaFacebook /></a></li>
                    <li className='mr-10 hover:scale-110 transition-transform duration-300'><a className='text-[4.50rem] text-white' href=""><FaLine /></a></li>
                </ul>
            </div>
              <div className='ml-20'>
                  <h4 className='text-[1.25rem] text-white text-semibold mt-25 md:mt-0'>ติดต่อทาง Email</h4>
                  <form action="" className='flex mt-2 '>
                      <div className='relative'>
                          <input type="text" className='bg-white/20 text-white text-[0.875rem] px4 py-2 rounded-md' placeholder='ส่งข้อความทางอีเมล' />
                          <button className='absolute top-[10px] right-[10px] cursor-pointer' type='submit'> <FaRegPaperPlane className='text-white ' /></button>
                      </div>
                  </form>
              </div>
        </div>
    </div>
  )
}

export default Contact