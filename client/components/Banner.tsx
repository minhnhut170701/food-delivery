"use client"
import React from 'react'

const Banner = () => {
  
  return (
    <div className='bg-banner-1 bg-no-repeat bg-top bg-cover w-full h-[600px] text-white relative'>
      <div className='w-full h-full absolute top-0 left-0 bg-black z-10 opacity-25'></div>
      <section className='flex items-center justify-center w-[30%] h-full mx-auto relative z-20'>
        <div className='space-y-5'>
          <h2 className='uppercase text-center text-3xl font-bold'>Liz Restaurant</h2>
          <p className='text-center'>Chúng tôi cung cấp không gian và dịch vụ giúp bạn tận hưởng bữa ăn của bạn với những người than thiết</p>
          <section className='flex items-center justify-center space-x-10'>
            <button className=' bg-white text-black pl-8 pr-8 p-2'>Cửa hàng</button>
            <button className=' bg-yellow-500 text-black pl-8 pr-8 p-2'>Về chúng tôi</button>
          </section>
        </div>
      </section>
      
    </div>
  )
}

export default Banner