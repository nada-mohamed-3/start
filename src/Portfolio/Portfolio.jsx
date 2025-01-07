import React from 'react'
import './portfolio.css'
import port1 from '../assets/poert1.png'
import port2 from '../assets/port2.png'
import port3 from '../assets/port3.png'
export default function Portfolio() {
  return (
    <>
        <div className="portfolio  d-flex justify-content-center align-items-center flex-column">
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

          <div className="row g-5 text-center py-4">

            <div className=" col-lg-4 col-md-6">

            <div className=' overflow-hidden position-relative rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={port1} className="w-100 rounded-3"/>
              <div className="layer  position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
                   
              </div>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-body">
                          <img src={port1} className='w-100' alt="port1" />
                      </div>
                    </div>
                  </div>
            </div>


        </div>


            <div className=" col-lg-4 col-md-6">
            <div className=' overflow-hidden position-relative rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal-2">
                <img src={port2} className="w-100 rounded-3"/>
              <div className="layer  position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
                   
              </div>
            
            <div className="modal fade" id="exampleModal-2" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-body">
                          <img src={port2} className='w-100' alt="port1" />
                      </div>
                    </div>
                  </div>
            </div>
            </div>


            <div className=" col-lg-4 col-md-6">
            <div className=' overflow-hidden position-relative rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal-3">
                <img src={port3} className="w-100 rounded-3"/>
              <div className="layer  position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
                   
              </div>
            
            <div className="modal fade" id="exampleModal-3" tabIndex="-3" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-body">
                          <img src={port3} className='w-100' alt="port1" />
                      </div>
                    </div>
                  </div>
            </div>
            </div>


            <div className=" col-lg-4 col-md-6">
            <div className=' overflow-hidden position-relative rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal-4">
                <img src={port1} className="w-100 rounded-3"/>
              <div className="layer  position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
                   
              </div>
            
            <div className="modal fade" id="exampleModal-4" tabIndex="-4" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-body">
                          <img src={port1} className='w-100' alt="port1" />
                      </div>
                    </div>
                  </div>
            </div>
            </div>

            <div className=" col-lg-4 col-md-6">
            <div className=' overflow-hidden position-relative rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal-5">
                <img src={port2} className="w-100 rounded-3"/>
              <div className="layer  position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
                   
              </div>
            
            <div className="modal fade" id="exampleModal-5" tabIndex="-5" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-body">
                          <img src={port2} className='w-100' alt="port1" />
                      </div>
                    </div>
                  </div>
            </div>
            </div>

            <div className=" col-lg-4 col-md-6">
            <div className=' overflow-hidden position-relative rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal-6">
                <img src={port3} className="w-100 rounded-3"/>
              <div className="layer  position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
                   
              </div>
            
            <div className="modal fade" id="exampleModal-6" tabIndex="-6" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-body">
                          <img src={port3} className='w-100' alt="port1" />
                      </div>
                    </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}
