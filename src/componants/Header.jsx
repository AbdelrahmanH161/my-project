import React from 'react'
import myimg from '/assets/img/perfil.png'
import { CiFacebook } from 'react-icons/ci'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
const Header = () => {
  return (
   <section className='max-w-md mx-auto flex flex-col gap-6 items-center justify-center py-4'>
    <div className=' rounded-full bg-white  border-2 border-main-900 p-1  overflow-hidden'>
     <div className='w-52 h-52 bg-gradient-to-b from-main-900 to-main-100 rounded-full overflow-hidden'>
      <img src={myimg} alt='' className='' />
     </div>
    </div>
    <div className='flex flex-col gap-2 items-center justify-center '>
     <h1 className='text-2xl font-bold font-medium-'>Abdelrahman</h1>
     <p className='text-lg text-slate-500 font-medium'>Frontend developer </p>
    </div>

    <div className='flex flex-row items-center gap-3'>
     <CiFacebook className='text-2xl' />
     <CiLinkedin className='text-2xl' />
     <FaGithub className='text-2xl' />
    </div>
   </section>
  )
}

export default Header