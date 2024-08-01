import React from 'react'
import { stitic } from '../data'

const LastWork = () => {
  return (
   <section className='max-w-md mx-auto py-2'>
    <div className='flex items-center justify-center gap-10'>

    {stitic.map((item) => (
     <div className='flex flex-col '>
      <span key={item.id}>{item.numper}</span>
      <p>{item.text}</p>
     </div>
    ))}
    </div>
   </section>
  )
}

export default LastWork