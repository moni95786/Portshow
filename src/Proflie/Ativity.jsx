import React from 'react'
import act from '../img/IMG_20251017_021031.jpg'
import act01 from '../img/IMG_20251017_021132.jpg'
import act02 from '../img/IMG_20251017_021109.jpg'

function Ativity() {
  return (
    <div className='bg-cyan-950/80' id='Activity'>
        <div className='container max-w-[1320px] mx-auto py-10'>
            <div className='flex justify-center items-center'>
                <h2 className='text-white text-[3.75rem] font-semibold' >Activity</h2>
            </div>
            <div className='grid grid-cols-1 md: grid-cols-2 my-10'>
                <ul>
                    <li><img src={act} alt="" /></li>
                </ul>
                <div className='bg-pink-300 mx-10 rounded-xl p-10 shadow-2xl shadow-black/80'>
                    <h3 className='text-white text-[1.25rem] md:text-[2.25rem] font-semibold'>กิจกรรมกัฬาสี ประจำปีการศึกษา 2567</h3>
                    <p className='ml-5 text-[1.25rem]'><span className='text-[1.50rem] font-semibold'>-</span>ได้เป้นตัวแทนในการถือพานพุ่มที่กิจกรรมกีฬาสี </p>
                </div>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2  '>
                <div className='bg-pink-300 mx-10 rounded-xl p-10 my-10 shadow-2xl shadow-black/80 '>
                    <h3 className='text-white text-[1.25rem] md:text-[2.25rem] font-semibold'>กิจกรรมรับน้อง ประจำปีการศึกษา 2568</h3>
                    <p className='ml-5 text-[1.25rem]'><span className='text-[1.50rem] font-semibold'>-</span>ได้เป็นตัวแทนในการเปิดพิธีและได้ถือธงสาขาคอมพิวเตอร์ธุระกิจ</p>
                </div>
                <ul className="grid grid-cols-2  gap-4 ">
                    <li className='overflow-hidden'><img className='h-[500px] w-[500px] object-contain' src={act01} alt="" /></li>
                    <li className='overflow-hidden'><img className='h-[500px] w-[500px] object-contain' src={act02} alt="" /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Ativity