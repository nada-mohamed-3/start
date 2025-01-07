import React from 'react'
import './footer.css'
export default function Footerone() {
  return (
    <>
       <footer>

            <div className='foot-two '>
                <div className=" container">
                  <div className="row g-4">
                    
                    <div className="col">
                            <div className="card py-5">
                            
                              <div className="card-body">
                                <h3 className="card-title">LOCATION</h3>
                                <p className="card-text">2215 John Daniel Drive</p>
                                <p className="card-text">Clark, MO 65243</p>
                              </div>
                            </div>
                    </div>


                    <div className="col">
                            <div className="card py-5">
                              <div className="card-body ">
                                <h3 className="card-title">AROUND THE WEB</h3>
                                 <div className="d-flex justify-content-center align-items-center">
                                     
                                 <div className='icons mx-1'>
                                <i className="fa-brands fa-facebook"></i>
                                </div>
                                
                                <div className='icons mx-1'>
                                <i className="fa-brands fa-twitter"></i>
                                </div>

                                <div className='icons mx-1'>
                                <i className="fa-brands fa-linkedin-in"></i>
                                </div>

                                  <div className='icons mx-1'>
                                        <i className="fa-solid fa-globe"></i>
                                  </div>

                                 </div>
                              </div>
                            </div>
                    </div>



                    <div className="col">
                            <div className="card py-5">
                            
                              <div className="card-body">
                                <h3 className="card-title">ABOUT FREELANCER</h3>
                                <p className="card-text">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                              </div>
                            </div>
                    </div>

                  </div>
                </div>
            </div>



            <div className='foot-one text-white py-4 d-flex justify-content-center align-items-center '>
                 Copyright © Your Website 2025
            </div>


        </footer>
    </>
  )
}
