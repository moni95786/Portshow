import React from 'react'
import AwardProgramer from '../img/IMG_20251015_200810.jpg'
import tableProgramer from '../img/IMG_20251015_141013.jpg'



function Perfomance() {
  return (
    <div className='bg-cyan-200' id='Performance'>
      <div className='container mx-auto max-w-[1320px] py-6 px-4'>
        <div className='flex flex-col md:flex-row justify-between bg-gray-200 md:items-center rounded-xl shadow-2xl shadow-black/50 '>
          <div className='w-full mx-0 md:mx-10 mt-4 md:mt-10 bg-purple-900 text-white p-6 md:p-10 rounded-2xl'> 
            <h2 className='text-[1.6rem] md:text-[2.75rem] font-semibold ' >Performance</h2>
            <p className='mt-3 text-[1rem] md:text-[1.25rem]'>ผลงานนี้ที่ได้ไปแข่งทักษะวิชาชีพมาและคว้าเหรียญทอง สิ่งที่ได้รับจากการแข่งทักษะคือ <br />
               <span className='text-lime-200 font-semibold'>1.</span> ให้กระบวนการคิดและการวิเคราะห์ในโจทย์ที่เขาให้มา <br />
               <span className='text-lime-200 font-semibold'>2.</span> สามารถเอากระบวนการคิดไปประยุกต์ใช้กับหลายๆภาษาได้ เช่น Python, JavaScript และ<span className='ml-1'>Java เป็นต้น</span>  <br />
               <span className='text-lime-200 font-semibold'>3.</span> ได้ฝึกการแก้โจทย์ปัญหาที่ซับซ้อนได้
            </p>
          </div>

          <div className='w-full mt-4 md:mt-0 py-4'>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <li className="overflow-hidden">
                <img className="w-full h-auto object-contain rounded-lg" src={AwardProgramer} alt="" />
              </li>
              <li className="overflow-hidden">
                <img className="w-full h-auto object-contain rounded-lg" src={tableProgramer} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfomance