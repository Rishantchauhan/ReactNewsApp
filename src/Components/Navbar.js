import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        {/* <nav class="navbar" style="background-color: #e3f2fd;"> */}
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true" to="/business">Business </Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true" to="/general">General</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
    </div>
  </div>
</nav>


      </div>
    )
  }
}

export default Navbar
