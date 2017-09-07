import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class CreateEventPage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            location: '',
            date: '',
            event: '',
            user: '',
            game: ''
        };
    }

  isFormInvalid() {
    return !(this.state.name && this.state.location && this.state.date === this.state.event === this.state);
  }
    render() {
        return (
            <div>
                <h2>Create an Event</h2>
                <form>
                    <div>
                        <input type="text" placeholder="Event Title" value={this.state.name} />
                    </div>
                    <div>
                        <input type="text" placeholder="location" value={this.state.location} />
                    </div>
                    <div>
                        <input type="date" placeholder="date" value={this.state.date} />
                    </div>
                    <div>
                        <input type="text" placeholder="event type" value={this.state.event} />
                    </div>
                    <div>
                        <input type="text" placeholder="games" value={this.state.games} />
                    </div>
                    <div>
                        <button className="btn btn-default" disabled={this.isFormInvalid()}>Post Event!</button>
                        <button className="btn btn-default"><Link to='/'>Back Home</Link></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateEventPage;