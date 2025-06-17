import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'
import AuthModal from './AuthModel'

function Authentication() {
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const handleOpenAuthModel = () => setOpenAuthModel(true);
  const handleCloseAuthModel = () => setOpenAuthModel(false);
  return (
    <div>
      <Grid className='overflow-y-hidden' container>
        {/* <Grid className="hidden lg:block" item size={{ xs: 12, sm: 8, md: 6, lg: 7 }}></Grid> */}
        <Grid className="hidden lg:block" item size={{ xs: 12, sm: 8, md: 6, lg: 7 }} >
          <img className='w-full h-screen' src="https://whmcsglobalservices.com/wp-content/uploads/2018/09/login-bg.jpg"
            alt="" />

        </Grid>

        <Grid className="px-10" item size={{ xs: 12, sm: 8, md: 6, lg: 5 }}>

          <div>
            <h1 className='mt-10 font-bold text-7xl'>Happening Now</h1>

            <h1 className='font-bold text-3xl py-16'>Join MySocial Now</h1>

            <div className='w-[60%] '>
              <div className='w-full'>

                <GoogleLogin width={330} />
                <p className='py-5 text-center'>OR</p>

                <Button onClick={handleOpenAuthModel} fullWidth variant='contained' size='large' sx={{
                  borderRadius: "29px",
                  py: "7px",

                }}>
                  Create Account
                </Button>
                <p className='text-sm mt-2'>BY signing up, you agree to the Terms of service
                  and Privacy Policy, including Cookie Use.</p>


              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-xl mb-5'>Already Have Account?</h1>
                <Button onClick={handleOpenAuthModel} fullWidth variant='outlined' size='large' sx={{
                  borderRadius: "29px",
                  py: "7px",

                }}>
                  Sign In
                </Button>


              </div>

            </div>
          </div>

        </Grid>

      </Grid>
      <AuthModal open={openAuthModel} handleClose={handleCloseAuthModel}/>
    </div>
  )
}

export default Authentication
