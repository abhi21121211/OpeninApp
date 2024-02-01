import React, { useState } from 'react'
import BellIcon from "../assets/Bell1.png"
import profile from '../assets/Profile1.png'

const TopBar = () => {


  return (
    <div className='w-[100%] flex items-center justify-between px-10 my-10'>
      <div>
         <h2 className='font-semibold text-2xl'>Upload CSV</h2>        
      </div>
      <div className='flex items-center w-[100px] justify-between topIcons'>
        <img src={BellIcon} />
        <img src={profile} />
      </div>
    </div>
  )
}

export default TopBar
