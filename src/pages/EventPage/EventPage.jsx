import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const EventPage = () => {
    return(
    <div>
        <h1>Major Events</h1>
        <h1>Local Events</h1>
        <button className="btn btn-default"><Link to='/create-event'>Create an Event</Link></button>
    </div>
)}

export default EventPage