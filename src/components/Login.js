// @flow strict

import * as React from 'react';
import './login.css'
import { Button } from '@material-ui/core';
import {auth,provider} from '../firebase'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
    const dispatch = useDispatch()
    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL

            }))
        }).catch(error => alert(error.message))
    }
    return (
        <div className='login' >
            <div className='login__container' >
                 <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/6a/7f/ff/6a7fff32-2797-532d-538e-fd6910b3f953/source/512x512bb.jpg'  alt='gmail_png' />
                 <Button  variant='contained' color='primary' onClick={()=>signIn()}>Login</Button>
            </div>
        </div>
    );
};

export default Login;