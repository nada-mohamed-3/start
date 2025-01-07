import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footerone from '../Footerone/Footerone'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Navbar/>

          <Outlet/>
       
      <Footerone/>
    </div>
  )
}
