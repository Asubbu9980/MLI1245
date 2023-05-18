import React from 'react';
import Navbar from '../../components/Primarynavbar/PrimaryNavbar'
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default HomeLayout