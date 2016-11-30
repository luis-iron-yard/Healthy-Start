import React from 'react'
import { Link } from 'react-router'
import Signup from './Signup'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    openModal() {
      this.setState({modalIsOpen: true});
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }
    render () {
        return (
            <main>
                <div className="container">
                    <div className="row welcomeContainer">
                        <div className="col-sm-7 welcomeText">
                            <h1 className="text-capitalize">healthy start</h1>
                            <p>Providing healthy recipes that meet the nutritional needs of pregnant women.</p>
                        </div>
                        <div className="col-sm-5 welcomeProfile">
                            <img id="genericBg_profile"src="http://unsplash.it/600?random" alt="generic profile image for the signup/in section" />
                            <p>Need an account? <Link to="./users/signup">SignUp</Link></p>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email address</label>
                                <input type="email" className="form-control" id="signInEmail" aria-describedby="emailAssistance" placeholder="Please Enter email" />
                                <small id="emailAssistance" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="selectInterest">Select Interest</label>
                                <select className="form-control" id="selectInterest">
                                    <option>Nutritional Topics</option>
                                    <option>Common Complaint Topics</option>
                                </select>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="col-sm-6">
                                    <button className="btn btn-default">Guest</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default Landing
