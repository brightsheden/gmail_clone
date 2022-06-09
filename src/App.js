// @flow strict

import React,{useEffect} from 'react';
import './App.css'
import Header from './components/Header';
import SideBar from './components/SideBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser, login } from './features/userSlice';
import Login from './components/Login';
import {auth} from './firebase'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user =  useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))
      }
    })
   
  },[])
  return (
    <Router>
      {!user ? (< Login/>) : (
        <div className='app'>
        <Header/>
     
     <div className='app__body'>
       <SideBar/>

       <Switch>
       <Route path='/' exact >
           <EmailList/>
         </Route>
         
         <Route path='/mail'  >
           <Mail/>
         </Route>
       
       </Switch>

       
    
     

     </div>

     {sendMessageIsOpen && (<SendMail/>)}

     
     
   </div>

      ) }
         
    </Router>
 
  );
};

export default App;