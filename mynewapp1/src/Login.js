import React, { useEffect } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



const Login = () => {

const navigate = useNavigate();
    
   const initialValues = {email : "", password : ""}; 
   const [formValues, setFormValue] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);


   const handleChange = (e) =>{
      console.log(e.target);
      const {name, value} = e.target;
      setFormValue({...formValues, [name] : value});
  }

 useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues)
        navigate("/dashboard");
    }

 },[formErrors])

   const handleSubmit = (e) =>{
     e.preventDefault();
     setFormErrors(validate(formValues));
     setIsSubmit(true);
   }

   const validate = (values) =>{
     const errors = {}
     const regex =  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
     if(!values.email){
        errors.email = "Email is Required";
     }else if(!regex.test(values.email)){
        errors.email = "This is not valid email format";
     }
     if(!values.password){
        errors.password = "Password is Required";
     }else if(values.password.length < 4){
        errors.password = "Password Must be more than 4 char";
     }else if(values.password.length > 10){
        errors.password = "Password Cannot exceed more than 10 char";
     }
    
     return errors;
   }


  return (
    <>
     <form  onSubmit={handleSubmit}>
     <div className="loginpage">
         <div className="container">
                <div className="row">
                    <div className="col-4 m-auto text-center">
                        <span className='icons'><LockIcon/></span>
                        <h6 className='mb-3'>Sign in</h6>
                            <Box
                                sx={{
                                width: 500,
                                maxWidth: '100%',
                                }}
                                >

                         <TextField className='my-3' margin="dense" color="secondary" fullWidth label="Email Address*" type='email' value={formValues.email} name='email' id="fullWidth email" onChange={handleChange} autoComplete='off'  />
                         <p style={{color : "red", textAlign : "left"}}>{formErrors.email}</p>
                         
                            </Box>
                             <Box
                                sx={{
                                width: 500,
                                maxWidth: '100%',
                                } }
                                >
                        <TextField  margin="dense" name='password' color="secondary" fullWidth label="Password*" type='password' value={formValues.password} id="fullWidth password" onChange={handleChange} autoComplete='off' />
                        <p style={{color : "red", textAlign : "left"}}>{formErrors.password}</p>
                        </Box>

                    <div className="checkbox my-3">
                    <FormGroup>
                    <FormControlLabel required control={<Checkbox />} label="Remember Me" />
                    </FormGroup>
                    </div>

                    <Button className='w-100' type='submit' margin="dense" variant="contained">SIGN IN</Button>
 
                    </div>


                </div>
            </div>
        </div>
     </form>
    </>
  )
}

export default Login;