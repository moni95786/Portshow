import React from 'react'
import act from '../img/IMG_20251017_021031.jpg'
import act01 from '../img/IMG_20251017_021132.jpg'
import act02 from '../img/IMG_20251017_021109.jpg'

function Ativity() {
  return (
    <div className='bg-cyan-950/80' id='Activity'>
        <div className='container max-w-[1320px] mx-auto py-6 px-4'>
            <div className='flex justify-center items-center'>
                <h2 className='text-white text-[2rem] md:text-[3.75rem] font-semibold' >Activity</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
                <ul>
                    <li><img className='w-full h-auto object-cover rounded-lg' src={act} alt="" /></li>
                </ul>
                <div className='bg-pink-300 rounded-xl p-6 shadow-2xl shadow-black/80'>
                    <h3 className='text-white text-[1.1rem] md:text-[2.25rem] font-semibold'>กิจกรรมกัฬาสี ประจำปีการศึกษา 2567</h3>
                    <p className='mt-2 text-[1rem]'><span className='text-[1.25rem] font-semibold'>-</span>ได้เป้นตัวแทนในการถือพานพุ่มที่กิจกรรมกีฬาสี </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-pink-300 rounded-xl p-6 my-4 shadow-2xl shadow-black/80 '>
                    <h3 className='text-white text-[1.1rem] md:text-[2.25rem] font-semibold'>กิจกรรมรับน้อง ประจำปีการศึกษา 2568</h3>
                    <p className='mt-2 text-[1rem]'><span className='text-[1.25rem] font-semibold'>-</span>ได้เป็นตัวแทนในการเปิดพิธีและได้ถือธงสาขาคอมพิวเตอร์ธุระกิจ</p>
                </div>
                <ul className="grid grid-cols-2 gap-4">
                    <li className='overflow-hidden'><img className='w-full h-auto object-contain rounded-lg' src={act01} alt="" /></li>
                    <li className='overflow-hidden'><img className='w-full h-auto object-contain rounded-lg' src={act02} alt="" /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Ativity