// @flow strict

import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import {useForm} from 'react-hook-form'
import * as React from 'react';
import './sendMail.css'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase';
import firebase from 'firebase'


function SendMail() {
    const {register, handleSubmit, watch, errors} = useForm()

    const submit = (formData)=>{
        console.log(formData)
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMessage())
    }

    const dispatch = useDispatch()
    return (
        <div  className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <Close onClick={()=> dispatch(closeSendMessage())} className='sendMail__close'/>

            </div>

            <form  onSubmit={handleSubmit(submit)}>
                <input name='to'  placeholder='To' type='text' ref={register({required: true})} />
                {errors.to && (<p  className='sendMail__errors'>To required</p>)}
                
                <input name='subject' placeholder='Subject' type='text'  ref={register({required: true})} />
                {errors.subject && (<p  className='sendMail__errors'>Subject required</p>)}
                

                <input name='message' placeholder='Message..' type='text' className='sendMail__message' ref={register({required: true})}  /> 
                {errors.message &&( <p className='sendMail__errors'>Message required</p>)}
                 

                <div className='sendMail__option'>
                    <Button 
                    className='sendMail__send'
                    variant='contained'
                    color='primary'
                    type='small'
                    >send</Button>

                </div> 
            </form>
            
        </div>
    );
};

export default SendMail;