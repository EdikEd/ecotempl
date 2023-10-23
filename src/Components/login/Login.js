import React, { Component } from 'react'
import './LoginStyle.css';

export default class Login extends Component {

  constructor() {
    super();
    
    this.state = {
      email: '',
      password: ''
    }

  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    console.log(email);
    console.log(password);
    window.location.href = '/dashboard';
  }

  render() {
    return (
      <div>
      <div style={{height:'100vh',width:'100%'}} className='login d-flex flex-column align-items-center justify-content-center'>
        <div className='login-card'>
          <div className='login-title mt-5'>
            <h1 className='text-center'>Login</h1>
          </div>
          <div className='form-container'>
            <form onSubmit={this.handleSubmit} className='d-flex flex-column align-items-center'>
                <div className='form-group'>                    
                    <input
                        className='input-field'
                        type='text'
                        id='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        placeholder='Email'
                    />
                </div>
                <div className='form-group'>                    
                    <input
                        className='input-field'
                        type='password'
                        id='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        placeholder='Password'
                    />
                </div>
                <button type='submit' className='btn-login mt-5'>Log in</button>                                 
            </form>            
          </div>
        </div>
      </div>
    </div>
    )
  }
}
