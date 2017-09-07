import React, {Component} from 'react';
import CreateEventPage from '../../../components/CreateEventPage/CreateEventPage';

class NewEvent extends Component {
    constructor() {
        super();
    }
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