import React from 'react';
import {Link} from 'react-router-dom';
import {
    Parallax
} from 'react-materialize';
import './EventList.css';

const EventList = (props) => {
    let eventInfo= props.events.map(eventsite => {
        return(
            <tr key={eventsite._id}>
                <td><Link to={'/events/' + eventsite._id}>{eventsite.title}</Link></td>
                <td>{eventsite.date}</td>
                <td className="grey-text text-darken-3 lighten-3">{eventsite.event}</td>
            </tr>
        )    
    })
    return (
        <div className="Event">
            <Parallax imageSrc="https://i.imgur.com/6iAC9Hk.jpg"/>
                <div className="section white">
                    <div className="row container">
                        <table>
                            <thead>
                                <tr>
                                    <th className="grey-text text-darken-3 lighten-3">Event Name</th>
                                    <th className="grey-text text-darken-3 lighten-3">Event Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eventInfo}
                            </tbody>
                        </table>
                    </div>
                </div>
            <Parallax imageSrc="https://i.imgur.com/SkPN7Hc.jpg"/>
        </div>
    )
}

export default EventList;