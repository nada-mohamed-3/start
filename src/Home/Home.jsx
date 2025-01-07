import React from 'react'
import './home.css'
import  img from '../assets/avataaars.svg'
export default function Home() {
  return (
    <>
       <div className="home  d-flex justify-content-center align-items-center">
          <div className='text-center'>
          <img src={img} className='mb-3' alt="avataaars.svg" />
          <div className='pt-4 text-white'>
                <h2 className=' text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
           </div>
           <div className=' text-white position-relative'>
                <span className='line-home'><i className="fa-solid fa-star"></i></span>
           </div>
           <p className='text-white pt-2'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
              
           
          
       </div>
    </>
  )
}
