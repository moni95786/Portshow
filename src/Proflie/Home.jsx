import React from 'react'
import Proflie from '../img/1747203505508.jpg'

function Main() {
  return (
    <div className='bg-cyan-100 ' id='Home'>
        <div className='container max-w-[1320px] mx-auto p-10 grid grid-cols-1 md:grid-cols-2 md:justify-between md:p-0'>
            <div className='h-60% w-55% overflow-hidden rounded-md  my-5 ml-10 md:ml-0'>
                <img className='h-full w-full  object-contain ' src={Proflie} alt="" />
            </div>

            <div className='m-5 md:m-5 bg-gray-900 rounded-xl p-10 text-white '>
              <div className='bg-gray-800 rounded-xl p-5 '>
                <h2 className='font-semibold text-[2.75rem]'>ประวัติส่วนตัว</h2>
                <p className='m-5 text-[1.15rem]'>ชื่อ : นายเดลมอน หล่ำ <br />
                    เกิด : วันที่ 29 เดือน กรกฎาคม พ.ศ.2550 <br /> 
                    อายุ : 18 ปี <br />
                    สัญชาติ : ไทย <br />
                    เชื่อชาติ : ไทย <br />
                    สายการเรียน : คอมพิวเตอร์ธุรกิจ <br />
                </p>
                <h2 className='font-semibold text-[2.75rem]'>ข้อมูลติดต่อ</h2>
                <p className='m-5'> ที่อยู๋ : 84/109 หมู่ที่ 2 ซ.ผู้ใหญ่บ้าน ต.สำนักขาม อ.สะเดา จ.สงขลา รหัสไปรษณีย์ 90320 <br />
                    อีเมล : mmykll637@gmail.com <br />
                    ID Line : delmon007
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main