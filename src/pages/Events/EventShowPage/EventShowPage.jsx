import React from 'react';
import ShowEvent from '../../../components/ShowEvent/ShowEvent'

const EventShowPage = (props) => {
    return(
        <div>
            <ShowEvent
                {...props}
            />
        </div>
    )
}

export default EventShowPage;