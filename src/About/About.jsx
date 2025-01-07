import React from 'react'
import './about.css'
export default function About() {
  return (
    <>
       <div className=" about d-flex justify-content-center align-items-center flex-column">
        <div>
              <div className=" text-center">
              <div className='pt-4 text-white'>
                      <h2 className=' text-uppercase mb-3 fs-1 fw-bolder'>About component</h2>
              </div>
              <div className=' text-white position-relative  '>
                      <span className='line-about'><i className="fa-solid fa-star"></i></span>
              </div>
              </div>   
        </div>
        <div className='d-flex justify-content-center align-items-center'>
              <div className=" container">
              <div className="row text-center text-white pt-5">
              <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </div>
              <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </div>
              </div> 
              </div>
        </div>
       </div>


       
    </>
  )
}
