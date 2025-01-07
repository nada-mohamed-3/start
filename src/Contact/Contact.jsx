import React, { useState } from 'react'
import './contact.css'
export default function Contact() {
  return (
    <>
       <div className=" contact d-flex justify-content-center align-items-center flex-column">
            <div>
                    <div className=" text-center">
                    <div className='pt-4'>
                            <h2 className=' text-uppercase mb-3 fs-1 fw-bolder'>Portfolio component</h2>
                    </div>
                    <div className=' position-relative  '>
                            <span className='line-portfolio'><i className="fa-solid fa-star"></i></span>
                    </div>
                    </div>   
              </div>


           <div className=" container">
           <form className=' w-50 p-3 mx-auto mt-5'>
               <div className='inputs position-relative mt-5'>
                <label htmlFor="userName">userName : </label> 
               <input id='userName' type="text" className=' form-control mt-2' placeholder='userName' name='userName'/>
               </div>
               <div className='inputs position-relative mt-5'>
                <label htmlFor="userAge">userAge : </label> 
               <input id='userAge' type="text" className=' form-control mt-2' placeholder='userAge' name='userAge'/>
               </div>
               <div className='inputs position-relative mt-5'>
                <label htmlFor="userEmail">userEmail : </label> 
               <input id='userEmail' type="email" className=' form-control mt-2' placeholder='userEmail' name='userEmail'/>
               </div>
               <div className='inputs position-relative mt-5'>
                <label htmlFor="userPasswotd">userPasswotd : </label> 
               <input id='userPasswotd' type="password" className=' form-control mt-2' placeholder='userPasswotd' name='userPasswotd'/>
               </div>

               <button className='btn mt-4 text-white rounded' type='submit'> Send Message </button>
               
           </form>
           </div>
                  
       </div>
    </>
  )
}
