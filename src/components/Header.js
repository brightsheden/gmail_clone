// @flow strict

import { Avatar, IconButton } from '@material-ui/core';
import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@material-ui/icons';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import './header.css'

function Header() {
    const user =  useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = ()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <Menu/>
                </IconButton>
                <img src='' alt='' />

            </div>

            <div className='header__middle'>
                <Search/>
                <input placeholder='search' type='text'/>
                <ArrowDropDown  className='header__inputCare'/>

            </div>

            <div className='header__right'>
                <IconButton>
                     <Apps/>
                </IconButton>

                <IconButton>
                     <Notifications/>
                </IconButton>
               <Avatar onClick={()=>signOut()} src={user?.photoUrl}/>

            </div>



            
        </div>
    );
};

export default Header;