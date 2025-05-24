import Image from 'next/image'
import React from 'react'

const CharacterImage = () => {
  return (
    <div className='absolute right-0 -bottom-[5px] lg:relative '>
        <Image src={"/naruto.png"} width={350} height={700} alt='shadow' className='w-[300px] lg:w-[400px] h-auto brightness-0 opacity-40 translate-x-[10px] translate-y-[10px] z-0' />
        <Image src={"/naruto.png"} width={350} height={700} alt='character' className='absolute inset-0 w-[300px] lg:w-[400px] h-auto z-10' />
    </div>
  )
}

export default CharacterImage