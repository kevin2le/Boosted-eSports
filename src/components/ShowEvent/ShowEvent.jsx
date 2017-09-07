
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
                <button className="btn" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
};

export default ShowEvent;