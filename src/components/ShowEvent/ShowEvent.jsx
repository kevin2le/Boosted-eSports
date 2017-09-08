
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eventAPI from '../../utils/eventAPI';

class ShowEvent extends Component {

    handleDelete = () => {
        eventAPI.delete(this.props.event._id);
    }

    render(props) {
        return (
            <div>
                <h2>{this.props.event.title}</h2>
                <h4>{this.props.event.date}</h4>
                <h5>{this.props.event.location}</h5>
                <h5>{this.props.event.type}</h5>
                <h6>{this.props.event.game}</h6>
                <button className="btn" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
};

export default ShowEvent;