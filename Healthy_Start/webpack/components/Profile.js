import React from 'react'
import { Link } from 'react-router'

class Signup extends React.Component {
    constructor(props) {
        super ()
    }
    render() {
        return(
            <main>
              <h4 id="updateProfile">Profile</h4>
              <hr />
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="profileUsername" name="username" aria-describedby="profileUsername" required />
                </div>
                <div className="form-group">
                  <label htmlFor="emailInput">Email address</label>
                  <input type="email" className="form-control" id="profileEmail" aria-describedby="profileEmail" placeholder="Please Enter email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInput">Password</label>
                  <input type="password" className="form-control" id="porfilePassword" name="password" placeholder="Password" required />
                </div>
                <div>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" id="saveProfile">Save changes</button>
                </div>
              </div>
            </main>
        )
    }
}
