import React, { Component } from 'react'
import './SignUpStyle.css';

export default class SignUp extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      city: '',
      job: ''
    }

  }

  handleChange = (e) => {
      const { name, value } = e.target;
      this.setState( { [name]: value } )
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const {email, firstName, lastName, birthDate, city, job} = this.state;
      console.log(email);
      console.log(firstName);
      console.log(lastName);
      console.log(birthDate);
      console.log(city);
      console.log(job);

  }


  render() {
    return (
      <div>
        <div className='sing-up d-flex flex-column align-items-center'>
          <div className='sign-up-card mt-5'>
            <div className='sign-up-title mt-5'>
              <h1 className='text-center'>Sign up</h1>
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
                          type='text'
                          id='firsName'
                          name='firstName'
                          value={this.state.firstName}
                          onChange={this.handleChange}
                          required
                          placeholder='First name'
                      />
                  </div>
                  <div className='form-group'>                      
                      <input
                          className='input-field'
                          type='text'
                          id='lastName'
                          name='lastName'
                          value={this.state.lastName}
                          onChange={this.handleChange}
                          required
                          placeholder='Last name'
                      />
                  </div>
                  <div className='form-group'>                      
                      <input
                          className='input-field'
                          type='text'
                          id='birthDate'
                          name='birthDate'
                          value={this.state.birthDate}
                          onChange={this.handleChange}
                          required
                          placeholder='Birth date'
                      />
                  </div>
                  <div className='form-group'>                      
                      <input
                          className='input-field'
                          type='text'
                          id='city'
                          name='city'
                          value={this.state.city}
                          onChange={this.handleChange}
                          required
                          placeholder='City'
                      />
                  </div>
                  <div className='form-group'>                      
                      <input
                          className='input-field'
                          type='text'
                          id='job'
                          name='job'
                          value={this.state.job}
                          onChange={this.handleChange}
                          required
                          placeholder='Job'
                      />
                  </div>
                  <button type='submit' className='btn-sign-up mt-5'>Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
