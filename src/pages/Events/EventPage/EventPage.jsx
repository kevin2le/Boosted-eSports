import React, {Component} from 'react';
import {
    Link,
    Route,
    Switch
} from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import EventList from '../../../components/EventList/EventList'
import eventAPI from '../../../utils/eventAPI';
import NewEvent from '../NewEvent/NewEvent';

class EventPage extends Component {
    constructor() {
        super();
        this.state = {
            events:[]
        }
    }
    componentDidMount() {
        eventAPI.index().then(events =>
            this.setState({events})
        );
    }
    render() {
        return (
            <div>
                <h3>Events</h3>
                <Link to='/events/new'>Create an Event</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to='/'>Back</Link>
                <EventList  />
            </div>
        )
    }
}


export default EventPage;