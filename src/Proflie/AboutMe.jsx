import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, } from "react-icons/fa";
import {SiCplusplus, SiPhp} from 'react-icons/si'

const LanguageLogo = [
  { icon: SiPhp, color: "text-purple-600"},
  { icon: FaHtml5, color: "text-orange-500" },
  { icon: FaCss3Alt, color: "text-blue-500" },
  { icon: FaJs, color: "text-yellow-400" },
  { icon: FaReact, color: "text-sky-500" },
  { icon: FaNodeJs, color: "text-green-600" },
  { icon: SiCplusplus, color: "text-blue-600" }
  
]


function AboutMe() {
  return (
    <div className='bg-cyan-100' id='aboutMe'>
      <div className='container max-w-[1320px] mx-auto p-4 md:p-5'>
        <div className='bg-gray-700 text-white rounded-xl p-4 shadow-2xl shadow-black/40'>
          <h2 className=' font-semibold text-[1.6rem] md:text-[2.75rem]'>About-Me</h2>
          <p className='mt-3 text-[1rem] md:text-[1.15rem] leading-relaxed'>สวัสดีครับ ผมชื่อมอน ผมมีความสนใจในด้านโปรแกรมเมอร์ตั้งแต่ผมอยู่ ม.3 โดยเริ่มเขียนครั้งแรกโดยใช้ภาษา Python ซึ่งเป็นภาษาที่เข้าใจง่ายและไม่ยากเลยทำให้ชอบการเขียนโค้ด
             เรื่อยมา <br />
             หลังจากขึ้น ปวช.1 ก็สนใจอยากทำเว็บไซต์ขึ้นมาจึงศึกษาด้วยตัวเองและมีเพื่อนที่ค่อยช่วยในการให้คำปรึกษาทำให้เรีนนรู้การเขียนเว็บไซต์เบื่องต้นมา<br />
             โดยผมใช้ความสามารถนี้ในการสร้าง Proflie ผ่านเว็บไซต์นี้ครับ
          </p>
        </div>
      <div className='bg-gray-800 mt-4 rounded-xl shadow-2xl shadow-black/40'>
        <h3 className='flex text-[1.6rem] md:text-[2.75rem] justify-center text-white font-semibold'>My Skill &gt;&gt; </h3>
          <ul className='flex flex-wrap items-center gap-4 my-6 justify-center md:justify-between text-[3rem] md:text-[4.25rem] pb-5 px-2'>
            {LanguageLogo.map(({icon: Logo, color}, index) => (
              <li key={index} className='flex flex-col items-center gap-2 p-3 hover:scale-110 transition-transform duration-300 hover:bg-white hover:shadow-white/40 hover:shadow-md rounded-xl backdrop-blur-md cursor-pointer'>
                  <Logo className={`${color}`} />
              </li>
            ))}
          </ul>
      </div>      
      </div>
    </div>
  )
}

export default AboutMe