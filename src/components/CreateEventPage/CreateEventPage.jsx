import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eventAPI from '../../utils/eventAPI';
import './CreateEventPage.css'

class CreateEventPage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            location: '',
            date: '',
            type: '',
            game: []
        };
    }
    
    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        eventAPI.create(this.state)
        .then(() => {
            this.props.history.push('/events');
        });
        
    }
    isFormInvalid() {
    return !(this.state.title && this.state.location && this.state.date);
  }
    render() {
        return (
            <div>
                <h2 className="CreateEventPage">Create an Event</h2>
                <form>
                    <div>
                        <input type="text" placeholder="Event Title" value={this.state.title} onChange={(e) => this.handleChange('title', e)} />
                    </div>
                    <div>
                        <input type="text" placeholder="location" value={this.state.location} onChange={(e) => this.handleChange('location', e)}/>
                    </div>
                    <div>
                        <input type="text" placeholder="date" value={this.state.date} onChange={(e) => this.handleChange('date', e)} />
                    </div>
                    <div>
                        <input type="text" placeholder="event type" value={this.state.type} onChange={(e) => this.handleChange('type', e)} />
                    </div>
                    <div>
                        <input type="text" placeholder="games" value={this.state.games} onChange={(e) => this.handleChange('game', e)}/>
                    </div>
                    <div>
                        <button className="btn btn-default" disabled={this.isFormInvalid()} onClick={this.handleSubmit}>Post Event!</button>
                        <button className="btn btn-default"><Link to='/'>Back Home</Link></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateEventPage;