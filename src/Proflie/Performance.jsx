import React from 'react'
import Cra from '../img/IMG_20251016_213822.jpg'
import picCra from '../img/IMG_20251017_005023.jpg'

function Performance() {
  return (
    <div className='bg-cyan-950'> 
        <div className='container mx-auto max-w-[1320px] py-10'>
            <div className='flex flex-col md:flex-row justify-between bg-rose-200 md:items-center rounded-xl shadow-2xl shadow-white/50 '>
                  <div className='flex flex-row mr-10'>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <li className="p-4 overflow-hidden">
                              <img className="h-[489px] w-[750px] object-contain rounded-lg" src={Cra} alt="" />
                          </li>
                          <li className="p-4 overflow-hidden">
                              <img className="h-[489px] w-[750px] object-contain rounded-lg" src={picCra} alt="" />
                          </li>
                      </ul>
                  </div>

            <div className='mx-10 bg-purple-900 text-white p-10 rounded-2xl mb-10'> 
                <h2 className='text-[2.75rem] font-semibold '>แข่งทักษะและอบรม Mos Camp SongKhla 2024</h2>
                <p className='ml-5 text-[1.25rem]'>ผลงานชิ้นนี้เป็นการแข่งทักษะโปรแกรมชุด Office ประกอบไปด้วยดังนี้  PowerPoint, Word, Excal และมีโปรแกรมของ Adobe เป็นโปรแกรม Photoshop </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Performance