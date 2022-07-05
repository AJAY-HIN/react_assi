import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from './card/Card'
import Carousal from './Carousal/Carousal'
import Carousal2 from './Carousal/Carousal2'
import Navbar from './Fnav/Navbar'
import Secnav from './secNav/Secnav'

export const Home = () => {
  return (
    <>
    <Carousal2/>
    {/* <Carousal/> */}
    <Secnav/>
    <Card/>
    </>
  )
}
