import React from 'react'
import { Link } from 'react-router-dom'
import NotLoggedIn from './NotLoggedIn'
import LoggedIn from './LoggedIn'
import { isLoggedIn } from '../../../../services/auth'
import './index.css'

function NavBar() {
  const loggedIn = isLoggedIn();

  return (
    <nav className='navbar navbar-expand-lg bg-info' data-bs-theme='light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'><h2>RapidReach</h2></Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown mx-3'>
              <Link className='nav-link dropdown-toggle active navbarlink' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Shipping
              </Link>
              <ul className='dropdown-menu' data-bs-theme='light'>
                <li><Link className='dropdown-item' to='/createashipment'>Create a Shipment</Link></li>
                <li><hr className='dropdown-divider' /></li>
                <li><Link className='dropdown-item' to='/quote'>Calculate shipping cost</Link></li>
                <li><hr className='dropdown-divider' /></li>
                <li><Link className='dropdown-item' to='/locations'>Find a Location</Link></li>
                <li><hr className='dropdown-divider' /></li>
                {loggedIn ? (
                  <li><Link className='dropdown-item' to='/client/shippinghistory'>View Shipping History</Link></li>
                ) : (
                  <li><Link className='dropdown-item' to='/login'>View Shipping History</Link></li>
                )}
                <li><hr className='dropdown-divider' /></li>
                <li><Link className='dropdown-item' to='/howtoship'>How To Ship a Parcel</Link></li>
              </ul>
            </li>
            <li className='nav-item dropdown mx-3'>
              <Link className='nav-link dropdown-toggle active navbarlink' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Tracking
              </Link>
              <ul className='dropdown-menu' data-bs-theme='light'>
                <li><Link className='dropdown-item' to='/track'>Track a Package</Link></li>
                <li><hr className='dropdown-divider' /></li>
                {loggedIn ? (
                  <li><Link className='dropdown-item' to='/client/dashboard'>View All Shipments</Link></li>
                ) : (
                  <li><Link className='dropdown-item' to='/viewallshipments'>View All Shipments</Link></li>
                )}
              </ul>
            </li>
            <li className='nav-item dropdown mx-3'>
              <Link className='nav-link dropdown-toggle active navbarlink' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Support
              </Link>
              <ul className='dropdown-menu' data-bs-theme='light'>
                {loggedIn ? (
                  <li><Link className='dropdown-item' to='/client/dashboard'>Manage Your Profile</Link></li>
                ) : (
                  <li><Link className='dropdown-item' to='/login'>Manage Your Profile</Link></li>
                )}
                <li><hr className='dropdown-divider'/></li>
                <li><Link className='dropdown-item' to='/contactus'>Contact Us</Link></li>
              </ul>
            </li>
          </ul>
          <div className='d-flex'>
            {loggedIn ? <LoggedIn/> : <NotLoggedIn />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar