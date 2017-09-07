import React from 'react';

const EventList = (props) => {
    return (
        <div>>
            <table>
                <tbody>
                    {props.events.map(event =>
                        <tr key={event.title}>
                            <td>{event.title}</td>
                            <td>{event.date}</td>
                            <td>{event.event}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default EventList;