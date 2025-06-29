import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, InitColorSchemeScript, outlinedInputClasses, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../../Store/Auth/Action';
import { useDispatch } from 'react-redux';
import { uploadToCloudinary } from '../../Utils/uploadToCloudnary';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: '4px',
};

export default function ProfileModel({ open, handleClose }) {
  //   const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false)
  const dispatch = useDispatch();
  const [SelectedImage, setSelectedImage] = React.useState(null);
  const {auth} = useSelector(store => store);


  const handleSubmit = (values) => {
    dispatch(updateUserProfile(values));
    console.log("handleSubmit", values);
    setSelectedImage(null);
  }

  const formik = useFormik({
    initialValues: {
      fullName: '',
      website: '',
      location: '',
      bio: '',
      backgroundImage: '',
      image: '',
    },

    onSubmit: handleSubmit
  });
  const handleImageChange = async(event) => {
    setUploading(true);
    const { name } = event.target;
    const file = await uploadToCloudinary(event.target.files[0]);
    formik.setFieldValue(name, file);
    setSelectedImage(file);
    setUploading(false);

  }

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-4'>
                <IconButton onClick={handleClose} aria-label='delete'>
                  <CloseIcon />
                </IconButton>
                <p className=''>Edit Profile</p>
              </div>
              <Button type='submit' >
                Save
              </Button>

            </div>

            <div className='hide-scrollbar overflow-y-scroll overflow-x-hidden h-[80vh]'>
              <React.Fragment>
                <div className='w-full'>
                  <div className='relative'>
                    <img
                      className='w-full h-[12rem] object-cover object-center'
                      src="https://cdn.pixabay.com/photo/2025/04/30/05/57/bay-9568512_640.jpg"
                      alt="" />
                    <input
                      type="file"
                      className='absulute top-0 left-0 w-full h-full opacity-0 
                        cursor-pointer'
                      onChange={handleImageChange}
                      name="backgroundImage"

                    />
                  </div>

                </div>
                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                  <div className='relative'>
                    <Avatar
                      sx={{
                        width: "10rem",
                        height: "10rem",
                        border: "4px solid #000",
                      }}
                      src={auth.user?.image || SelectedImage || "https://cdn.pixabay.com/photo/2025/04/21/04/58/guitar-9546520_640.png"}

                    />

                    <input
                      className='absolute top-0 left-0 w-[10rem] h-full opacity-0
                        cursor-pointer'
                      onChange={handleImageChange}
                      type="file"
                      name='image' />

                  </div>

                </div>

              </React.Fragment>
              <div className='space-y-3'>
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={formik.touched.website && Boolean(formik.errors.website)}
                  helperText={formik.touched.website && formik.errors.website}
                />
                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={formik.touched.location && Boolean(formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location}
                />
                <div className='my-3'>
                  <p className='text-lg'>Birth Date . Edit</p>
                  <p className='text-2x1'>October 14, 1897</p>
                </div>
                <p className='py-3 text'>Edit professional profile</p>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}


