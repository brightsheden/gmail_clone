// @flow strict

import { IconButton } from '@material-ui/core';
import { ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons';
import * as React from 'react';
import { db } from '../firebase';
import './emailList.css'
import EmailRole from './EmailRole';
import './Section'
import Section from './Section';



function EmailList() {
    const [emails, setEmail] =  React.useState([])
    React.useEffect(()=>{
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(
            snapshot => setEmail(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        )

    },[])
    return (
        <div className='emailList'>
            <div className='emailList__settings' >
                <div className='emailList__settingsLeft'>
                    <CheckBox/>
                    <IconButton>
                        <ArrowDropDown/>

                    </IconButton>
                    <IconButton>
                        <Redo/>
                        
                    </IconButton>

                    <IconButton>
                        <MoreVert/>
                        
                    </IconButton>

                </div>
                <div className='emailList__settingsRight'>
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>

                    <IconButton>
                        <ChevronRight/>
                    </IconButton>

                    <IconButton>
                        <KeyboardHide />
                    </IconButton>

                    <IconButton>
                        <Settings/>
                    </IconButton>

                </div>  

            </div>
            <div className='emailList__sections'>
                <Section  Icon={Inbox} title='primary' color='red' selected={true}/>
                <Section  Icon={People} title='social' color='#1A73E8' />
                <Section  Icon={LocalOffer} title='Promotions' color='green' />

            </div>

            <div className='emailList__list'>
                {emails?.map(({id, data: {to,subject, message, timestamp}})=>(
                    <EmailRole
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description= {message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}

                    />
                ))}
                <EmailRole 
                title='Twitch' 
                subject='Hey fellow streamers'
                description='this is a test' 
                time="10pm"/>
                  <EmailRole 
                title='Twitch' 
                subject='Hey fellow streamers'
                description='this is a test' 
                time="10pm"/>
                  <EmailRole 
                title='Twitch' 
                subject='Hey fellow streamers'
                description='this is a test' 
                time="10pm"/>
                  <EmailRole 
                title='Twitch' 
                subject='Hey fellow streamers'
                description='this is a test, this is a test,this is a test,this is a test
                this is a test' 
                time="10pm"/>
                
            </div>
            
        </div>
    );
};

export default EmailList;