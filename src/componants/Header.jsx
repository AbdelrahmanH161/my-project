import React from 'react'
import myimg from '/assets/img/perfil.png'
import { CiFacebook } from 'react-icons/ci'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { socialLink } from '../data'
const Header = () => {
  return (
   <section className='max-w-md mx-auto flex flex-col gap-6 items-center justify-center py-4'>
    <div className=' rounded-full bg-white dark:bg-black border-2 border-main-900 p-1  overflow-hidden'>
     <div className='w-52 h-52 bg-gradient-to-b from-main-900 to-main-100 rounded-full overflow-hidden'>
      <img src={myimg} alt='' className='' />
     </div>
    </div>
    <div className='flex flex-col gap-2 items-center justify-center '>
     <h1 className='text-2xl font-bold font-medium-'>Abdelrahman</h1>
     <p className='text-lg text-slate-500 font-medium'>Frontend developer </p>
    </div>

    <div className='flex flex-row items-center gap-3'>
     {socialLink.map((item) => (
      <a className='text-lg hover:text-main-600' key={item.id} href={item.link}>
       <item.icon />
      </a>
     ))}
    </div>
   </section>
  )
}

export default Header