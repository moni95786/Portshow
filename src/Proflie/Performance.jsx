import React from 'react'
import Cra from '../img/IMG_20251016_213822.jpg'
import picCra from '../img/IMG_20251017_005023.jpg'

function Performance() {
  return (
    <div className='bg-cyan-950'> 
        <div className='container mx-auto max-w-[1320px] py-6 px-4'>
            <div className='flex flex-col md:flex-row justify-between bg-rose-200 md:items-center rounded-xl shadow-2xl shadow-white/50 '>
                  <div className='w-full'>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <li className="overflow-hidden">
                              <img className="w-full h-auto object-contain rounded-lg" src={Cra} alt="" />
                          </li>
                          <li className="overflow-hidden">
                              <img className="w-full h-auto object-contain rounded-lg" src={picCra} alt="" />
                          </li>
                      </ul>
                  </div>

            <div className='w-full mx-0 md:mx-10 bg-purple-900 text-white p-6 md:p-10 rounded-2xl mt-4 md:mt-0'> 
                <h2 className='text-[1.6rem] md:text-[2.75rem] font-semibold '>แข่งทักษะและอบรม Mos Camp SongKhla 2024</h2>
                <p className='mt-3 text-[1rem] md:text-[1.25rem]'>ผลงานชิ้นนี้เป็นการแข่งทักษะโปรแกรมชุด Office ประกอบไปด้วยดังนี้  PowerPoint, Word, Excal และมีโปรแกรมของ Adobe เป็นโปรแกรม Photoshop </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Performance