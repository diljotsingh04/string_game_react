import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.first}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">{props.second}</a>
            </li>
          <li>
            <div className="form-check form-switch my-2 mx-5 collapse navbar-collapse">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`} htmlFor="flexSwitchCheckDefault">Enable/Disable dark mode</label>
            </div>
          </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 " type="search" placeholder="Temporary Disabled" aria-label="Search" disabled/>
            <button className="btn btn-outline-success" type="submit" disabled>Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  first: PropTypes.string,
  second: PropTypes.string
}

Navbar.defaultProps = {
  first: "Loading...",
  second: "Loading...",
  title: "Loading..."
};

