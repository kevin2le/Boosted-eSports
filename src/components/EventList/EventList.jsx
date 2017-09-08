import React from 'react';
import {Link} from 'react-router-dom';

const EventList = (props) => {
    let eventInfo= props.events.map(eventsite => {
        return(
            <tr key={eventsite._id}>
                <td><Link to={'/events/' + eventsite._id}>{eventsite.title}</Link></td>
                <td>{eventsite.date}</td>
                <td>{eventsite.event}</td>
            </tr>
        )    
    })
    return (
        <div>>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Event Date</th>
                    </tr>
                </thead>
                <tbody>
                    {eventInfo}
                </tbody>
            </table>
        </div>
    )
}

export default EventList;