// @flow strict

import { Button, IconButton } from '@material-ui/core';
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
import './sidebar.css'
import SideBarOptions from './SideBarOptions';

function SideBar() {
    const dispatch = useDispatch()
    return (
        <div className='sidebar'>
            <Button startIcon={<Add fontSize='large'/>}
            className="sidebar__compose"
            onClick={()=> dispatch(openSendMessage())}>Compose</Button>

            <SideBarOptions  Icon={Inbox} Title='inbox' number='54' selected={true}  />
            <SideBarOptions  Icon={Star} Title='starred' number='20' />
            <SideBarOptions  Icon={AccessTime} Title='Snoozed' number='56'  />
            <SideBarOptions  Icon={LabelImportant} Title='Important' number='20'  />
            <SideBarOptions  Icon={NearMe} Title='Sent' number='23'  />
            <SideBarOptions  Icon={Note} Title='Drafts' number='29'  />
            <SideBarOptions  Icon={ExpandMore} Title='more' number='23'  />

            <div className='sidebar__footer'>
                <div className='sidebar__footerIcons'>
                    <IconButton>
                        <Person/>
                    </IconButton>

                    <IconButton>
                        <Duo/>
                    </IconButton>

                    <IconButton>
                        <Phone/>
                    </IconButton>


                </div>
            </div>
        </div>
    );
};

export default SideBar;