import React from 'react'
import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Key } from '@mui/icons-material';
import { registerUser } from '../../Store/Auth/Action';

const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    })


function SignupForm() {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        { value: '01', label: 'January' },
        { value: '02', label: 'February' },
        { value: '03', label: 'March' },
        { value: '04', label: 'April' },
        { value: '05', label: 'May' },
        { value: '06', label: 'June' },
        { value: '07', label: 'July' },
        { value: '08', label: 'August' },
        { value: '09', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' }
    ]

    const dispatch = useDispatch();

     const formik = useFormik({
            initialValues: {
                fullName: "",
                email: "",
                password: "",
                dateOfBirth: {
                    day: "",
                    month: "",
                    year: ""
                }
            },
            validationSchema,
            onSubmit: (values) => {
                const {day, month, year} = values.dateOfBirth;
                const dateOfBirth = `${year}-${month}-${day}`;
                values.dateOfBirth = dateOfBirth;
                // Here you can handle the form submission, e.g., send data to an API
                dispatch(registerUser(values)); 
                console.log("Form Submitted", values);
            }
        });

        const handleDateChange = (name) => (event) => {
            formik.setFieldValue("dateOfBirth",
                {
                ...formik.values.dateOfBirth,
                [name]: event.target.value
                }
             )
        }
  return (
     <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid items size={{ xs: 12 }} >
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="fullName"
                                variant="outlined"
                                size='large'
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onAbort={formik.handleBlur}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                helperText={formik.touched.fullName && formik.errors.fullName}
    
                            />
                        </Grid>
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
                        <Grid items size={{ xs: 4 }} >
                            <InputLabel>Date</InputLabel>
                            <Select name='day' value={formik.values.dateOfBirth.day} onChange={handleDateChange('day')} 
                            onBlur={formik.handleBlur} fullWidth >
                                {days.map((day) => 
                                <MenuItem Key={day} value={day}> {day}</MenuItem>
                                )}
                            </Select>

                        </Grid>
                         <Grid items size={{ xs: 4 }} >
                            <InputLabel>Month</InputLabel>
                            <Select name='month' value={formik.values.dateOfBirth.month} onChange={handleDateChange('month')} 
                            onBlur={formik.handleBlur} fullWidth >
                                {months.map((month) => 
                                <MenuItem Key={month.value} value={month.value}> {month.label}</MenuItem>
                                )}
                            </Select>

                        </Grid>
                        <Grid items size={{ xs: 4 }} >
                            <InputLabel>Year</InputLabel>
                            <Select name='year' value={formik.values.dateOfBirth.year} onChange={handleDateChange('year')} 
                            onBlur={formik.handleBlur} fullWidth >
                                {years.map((year) => 
                                <MenuItem Key={year} value={year}> {year}</MenuItem>
                                )}
                            </Select>

                        </Grid>
                        <Grid className="mt-20" size={{ xs: 12 }} >
                            <Button type='submit' fullWidth variant="contained" size='large'
                            sx={{
                                borderRadius: "29px",
                                py: "15px",
                                bgcolor: "blue[500]"
                            }}>
                                Signup
                            </Button>
    
                        </Grid>
                    </Grid>
                </form>
  )
}

export default SignupForm
