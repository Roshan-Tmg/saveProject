import React from 'react'
import { Button, Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../Store/Auth/Action';
import { useDispatch } from 'react-redux';


const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    })


function SigninForm() {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values))
            // Here you can handle the form submission  and send data to an API
            console.log("Form Submitted", values);
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
                <Grid container spacing={2}>
                    <Grid items size={{ xs: 12 }} >
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            variant="outlined"
                            size='large'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onAbort={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}

                        />


                    </Grid>
                    <Grid items size={{ xs: 12 }} >
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            variant="outlined"
                            size='large'
                            type='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onAbort={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}

                        />
                    </Grid>
                    <Grid className="mt-20" size={{ xs: 12 }} >
                        <Button type='submit' fullWidth variant="contained" size='large'
                        sx={{
                            borderRadius: "29px",
                            py: "15px",
                            bgcolor: "blue[500]"
                        }}>
                            Signin
                        </Button>

                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default SigninForm
