import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { More } from '@mui/icons-material';
import SubscriptionModel from '../SubscriptionModal/SubscriptionModal';


function RightPart() {
   const [openSubscriptioncModal, setOpenSubscriptioncModal] = React.useState(false);

    const handleOpenSubscriptioncModal = () => setOpenSubscriptioncModal(true);
    const handleCloseSubscriptioncModal = () => setOpenSubscriptioncModal(false);
    const handleChangeTheme = () => {   
        console.log('change theme');
    }
  return (
    <div className='py-5 sticky top'>
        <div className='relative flex items-center '>
            <input type="text" className='py-3 rounded-full text-gray-500 w-full p1-p12' />
            <div className='absulute top-0 left-0 pl-3 pt-3'>
                <SearchIcon className='text-gray-500' />

            </div>
            <Brightness6Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
        </div>
        <section className='my-5 '>
            <h1 className='text-xl font-bold'>Get verify</h1>
            <h1 className='font-bold my-2'>Suscribe to unlock new</h1>
            <Button
           
             variant='contained' sx={{
                padding: "10px",
                paddingX: "20px",
                borderRadius: "25px",
            }}
             onClick={handleOpenSubscriptioncModal}
                >
                Get verify
            </Button>
        </section >
        <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-x1 py-1'>What happening</h1>
                <div>
                    <p className='text-sm'>
                       barcelona win the match 
                       
                    </p>
                    <p className='font-bold'>
                        lamin yamal is the best player
                        </p>
                        <div className='flex justify-between w-full'>
                            <div>
                                <p>Sports . Trending</p>
                                <p className='font-bold'>#barca</p>
                                <p>300k Tweets</p>
                            </div>
                            <MoreHorizIcon className='cursor-pointer' />

                        </div>
                    
                </div>
        </section>
        <section>
            <SubscriptionModel open={openSubscriptioncModal} handleClose={handleCloseSubscriptioncModal}/>
        </section>
      
    </div>
  )
}

export default RightPart
