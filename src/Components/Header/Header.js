import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Hyph} from '../Utils/Utils'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.forceUpdate();
  }  

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        <Hyph />
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/home'>
              <FontAwesomeIcon className='black' icon='dog'/>
            {' '}
            You Dirty Dog
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}