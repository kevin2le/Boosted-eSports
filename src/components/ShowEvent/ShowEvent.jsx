
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eventAPI from '../../utils/eventAPI';
import './ShowEvent.css'

class ShowEvent extends Component {

    handleDelete = () => {
        eventAPI.delete(this.props.event._id);
    }

    render(props) {
        return (
            <div className="ShowEvent">
                <h2>{this.props.event.title}</h2>
                <h6>{this.props.event.date}</h6>
                <h5>Location:{this.props.event.location}</h5>
                <h5>Featured Event:{this.props.event.type}</h5>
                <h6>Featured Games:{this.props.event.game}</h6>
                <button className="btn" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
};

export default ShowEvent;