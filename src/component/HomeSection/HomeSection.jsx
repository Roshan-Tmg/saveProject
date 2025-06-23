import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Button } from '@mui/material';

import TweetCard from './TweetCard';
import { useDispatch, useSelector } from 'react-redux';
import { createTweet, getAllTweets } from '../../Store/Twit/Action';
import { uploadToCloudinary } from '../../Utils/uploadToCloudnary';



const validationSchema = Yup.object({
    content: Yup.string().required('Content is required'),
})



function HomeSection() {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();
    const {twit}= useSelector(Store => Store)
    console.log("All tweets", twit);



    const handleSubmit = (values,action) => {
        dispatch(createTweet(values))
        action.resetForm();
        setSelectedImage(null);
        console.log(values);
    }

    useEffect(()=>{
        dispatch(getAllTweets())

    }
    ,[twit.like, twit.retwit])

    const formik = useFormik({
        initialValues: {
            content: '',
            image: '',
        },
        onSubmit: handleSubmit,
        validationSchema

    })

    const handleSelectImage = async (event) => {
        setUploadingImage(true);
        const imgurl = await uploadToCloudinary(event.target.files[0]);
        formik.setFieldValue('image', imgurl);
        setSelectedImage(imgurl);
        setUploadingImage(false);
    }
    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-x1 font-bold opacity-90'> Home </h1>
            </section>

            <div className='flex space-x-5'>
                {/* for the tweet function like image and text */}
                <section className='pb-10'>
                    <Avatar
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter_bird_logo_2012.svg/24px-Twitter_bird_logo_2012.svg.png"

                    />
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit} className='flex flex-col'>
                            <div >
                                <input type="text" name='content' placeholder='What happening'
                                    className='border-none outline-none text-xl bg-transparent'
                                    {...formik.getFieldProps('content')} />
                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'>{formik.errors.content}</span>
                                )}
                            </div>
                            <div className='flex justify-between items-center mt-5'>
                                {/* <div>
                    <img src="" alt="" />
                </div> */}
                                <div className='flex space-x-5 items-center mt-5'>
                                    <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon className='text-[#1d9bf0]' />
                                        <input type="file" name='imageFile' className='hidden'
                                            onChange={handleSelectImage} />
                                    </label>
                                    <FmdBadIcon className='text-[#1d9bf0]' />
                                    <TagFacesIcon className='text-[#1d9bf0]' />
                                </div>
                                <div>
                                    <Button sx={{
                                        Width: '100%',
                                        borderRadius: '2px',
                                        paddingY: '8px',
                                        paddingX: '20px',
                                        bgcolor: '#1DA1F2',
                                    }}
                                        variant="contained"
                                        type='submit'
                                    >
                                        Tweet
                                    </Button>
                                </div>
                            </div>
                        </form>
                        <div>
                           {selectImage && <img src={selectImage} alt="" className="max-w-[400px] max-h-[400px] rounded-md mt-2 border border-gray-300"/> }
                        </div>
                    </div>




                </section>
            </div>
            {/* to display the tweets */}
            <section>
                {twit.twits.map((item)=><TweetCard  key={item.id} item={item}/>)}
            </section>
        </div>
    )
}

export default HomeSection
