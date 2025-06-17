import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box } from '@mui/system';
import ProfileModel from './ProfileModel';
// import { Tab, TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab, Tabs } from '@mui/material';


function Profile() {
    const [tabValue, setTabValue] = useState(1);
    const navigate = useNavigate();
    const [openProfileModal, setOpenProfileModal] = useState(false);
    const handleOpenProfileModel = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);
    const handleBack = () => navigate(-1);
    
    const handleFollowUser = () => {
           console.log("Follow user");
       }
    // const handleTabChange = (event, newValue) => {
    //     setTabValue(newValue)
    //     if (newValue===4) {
    //         console.log("user likes")
    // }
    // else if(newValue===1){
    //     console.log("user twits")
    // }



    return (
        <div>
            <section className='z-50 flex item-center sticky top-0 bg-opacity-95'>
                <KeyboardBackspaceIcon className='text-black cursor-pointer' onClick={handleBack} />

                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>
                    Code with human
                </h1>

            </section>
            <section>
                <img className='w-{100%} h-[15rem]' src="https://cdn.pixabay.com/photo/2024/01/01/13/55/strong-8481378_640.jpg" alt="" />
            </section>

            <section>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24'
                        alt='Code with human' src='https://cdn.pixabay.com/photo/2025/04/21/04/58/guitar-9546520_640.png'
                        sx={{
                            width: "10rem",
                            height: "10rem",
                            border: "4px solid #000",
                        }}
                    />
                    {true ? <Button
                        onClick={handleOpenProfileModel}
                        variant='contained'
                        sx={
                            {
                                borderRadius: "20px"
                            }
                        }
                    >
                        Edit profile
                    </Button> :
                        <Button
                            onClick={handleFollowUser}
                            variant='contained'
                            sx={
                                {
                                    borderRadius: "20px"
                                }
                            }
                        >
                            {true?"Follow" : "Unfollow"}
                        </Button>}


                </div>
                <div>
                    <div className='flex items-center'> 
                                <h1 className='font-bold-lg'>Code with human</h1>
                                {true &&<img className='m1-2 w-5 h-5' 
                            src="https://media.istockphoto.com/id/1313547780/vector/profile-verification-check-marks-icons-vector-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=XDWxGC05gd-sTn_cBvlI2aG1onqOdiVdPb0IeFO-Q2M=" />}    
                    </div>
                    <h1 className='text-gay-500'>@codeWithHuman</h1>
                </div>
                <div className='mt-2 space-y-3'>
                    <p> i am happy</p>
                        <div className='py-1 flex space-x-5'>
                            <div className='flex items-center text-gray-500'>
                                <LocationOnIcon />
                                <p className='mi-2'>
                                    Nepal
                                </p>
                            </div>
                            <div className='flex items-center text-gray-500'>
                                <CalendarMonthIcon />
                                <p className='mi-2'>
                                    Joined on 2024
                                </p>
                            </div>
                            <div className='flex items-center space-x-5'>
                                <div className='flex items-center space-x-1 font-semibold'>
                                    <span>
                                            10
                                        </span>
                                        <span text-gray-500>
                                            following
                                        </span>
                                        <span>
                                            12
                                        </span>
                                        <span text-gray-500>
                                            followers
                                        </span>
                                </div>

                            </div>

                        </div>
                        
                </div>
                
            </section>

            <section>
                <ProfileModel handleClose={handleClose}
                open={openProfileModal}
                />
            </section>

           
        </div>
    )
}

export default Profile
