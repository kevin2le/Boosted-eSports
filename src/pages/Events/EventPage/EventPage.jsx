import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import EventList from '../../../components/EventList/EventList'
import eventAPI from '../../../utils/eventAPI';
import './EventPage.css'

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
    render(props) {
        return (
            <div className="EventPage">
                <h3>Events</h3>
                <Link to='/events/new'>Create an Event</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/'>Back</Link>
                <EventList events={this.state.events} />
            </div>
        )
    }
}


export default EventPage;