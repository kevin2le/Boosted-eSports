import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConf: ''
        };
    }
    
handleChange = (field, e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.signup(this.state)
      .then(() => {
        this.props.handleSignup();
        this.props.history.push('/');
      })
      // invalid user data
      .catch(err => this.props.updateMessage(err.message));
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

    render() {
        return  (
            <div>
                <header>Sign Up</header>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input type="text" placeholder="Nickname" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
                        </div>
                        <div>
                            <div>
                                <input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="password" placeholder="Confirm Password" value={this.state.passwordConf} onChange={(e) => this.handleChange('passwordConf', e)} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>
                                <button className="btn btn-default"><Link to='/'>Cancel</Link></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;