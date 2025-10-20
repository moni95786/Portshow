import React from 'react'
import AwardProgramer from '../img/IMG_20251015_200810.jpg'
import tableProgramer from '../img/IMG_20251015_141013.jpg'



function Perfomance() {
  return (
    <div className='bg-cyan-200' id='Performance'>
      <div className='container mx-auto max-w-[1320px] py-10'>
        <div className='flex flex-col md:flex-row justify-between bg-gray-200 md:items-center rounded-xl shadow-2xl shadow-black/50 '>
          <div className='mx-10 mt-10 bg-purple-900 text-white p-10 rounded-2xl'> 
            <h2 className='text-[2.75rem] font-semibold ' >Performance</h2>
            <p className='ml-5 text-[1.25rem]'>ผลงานนี้ที่ได้ไปแข่งทักษะวิชาชีพมาและคว้าเหรียญทอง สิ่งที่ได้รับจากการแข่งทักษะคือ <br />
               <span className='text-lime-200 text-semibold'>1.</span> ให้กระบวนการคิดและการวิเคราะห์ในโจทย์ที่เขาให้มา <br />
               <span className='text-lime-200 text-semibold'>2.</span> สามารถเอากระบวนการคิดไปประยุกต์ใช้กับหลายๆภาษาได้ เช่น Python, JavaScritp และ<span className='ml-5'>Java เป็นต้น</span>  <br />
               <span className='text-lime-200 text-semibold'>3.</span> ได้ฝึกการแก้โจทย์ปัญหาที่ซับซ้อนได้
            </p>
          </div>

          <div className='flex flex-row ml-10'>
            <ul className="flex flex-col md:flex-row justify-center gap-2">
              <li className="p-4 overflow-hidden">
                <img className="h-[489px] w-[850px] object-contain " src={AwardProgramer} alt="" />
              </li>
              <li className="p-4 overflow-hidden">
                <img className="h-[489px] w-[850px] object-contain" src={tableProgramer} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfomance