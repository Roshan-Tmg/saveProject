import { Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'
import { Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'
import { Route as Rute } from 'react-router-dom'




function HomePage() {
  return (
    <Grid container xs={12} className='px-5 lg:px-36 justify-between' >

      <Grid item xs={0} letterSpacing={2.5} className='hidden lg:block w-fill relative'>

        <Navigation />

      </Grid>
      <Grid item xs={12} letterSpacing={6} className='hidden lg:block w-fill relative'>
      <Routes>
        <Rute path="/" element ={<HomeSection/>}></Rute>
        <Rute path="/home" element ={<HomeSection/>}></Rute>
        <Rute path="/profile/:id" element ={<Profile/>}></Rute>
        
        </Routes>
      </Grid>

      <Grid item xs={0} letterSpacing={2.5} className='hidden lg:block w-fill relative'>
        <RightPart />

      </Grid>

    </Grid>
  )
}

export default HomePage
