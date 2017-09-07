import React from 'react';
import {Link} from 'react-router-dom';

const EventList = (props) => {
    return (
        <div>>
            <table>
                <tbody>
                    {props.events.map(eventsite =>
                        <tr key={eventsite._id}>
                            <td><Link to={'/events/' + eventsite._id}>{eventsite.title}</Link></td>
                            <td>{eventsite.date}</td>
                            <td>{eventsite.event}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default EventList;