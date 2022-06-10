import { jsonEval } from '@firebase/util';
import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false)
    const {token} = useAuth()

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const user = {email}
        fetch("http://localhost:5000/users/admin", {
            method:"PUT",
            headers:{
                "authorization": `Bearer ${token}`,
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true)
            }
            // console.log(data)
        })
    }
    return (
        <div>
            <form onClick={handleSubmit} style={{marginTop:"160px"}}>
            <TextField 
             label="Email"
             name='email'
             onBlur={handleOnBlur}
             style={{width:"500px", marginBottom:"10px"}}
             variant="filled" />
            <br />
            <Button  variant="contained" type='submit'>Make Admin</Button>
            </form>
            {success && <Alert severity='success'>{email} is now Admin </Alert>}
        </div>
    );
};

export default MakeAdmin;