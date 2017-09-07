import React, {Component} from 'react';
import CreateEventPage from '../../../components/CreateEventPage/CreateEventPage';

class NewEvent extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <CreateEventPage {...this.props} />
            </div>
        )
    }
}

export default NewEvent;