import React from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.navItem1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.navItem2}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.navItem3}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    {props.navItem3Field1}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {props.navItem3Field2}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {props.navItem3Field3}
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {props.navItem3Field4}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type={props.navBtn1}
              placeholder={props.navBtn1}
              aria-label={props.navBtn1}
            />
            <button className="btn btn-outline-success" type="submit">
              {props.navBtn1}
            </button>
          </form>
        </div>
      </div>
    </nav>

  )
}

NavBar.prototype = {
  title: PropTypes.string.isRequired,
  navItem1: PropTypes.string.isRequired,
  navItem2: PropTypes.string.isRequired,
  navItem3: PropTypes.string.isRequired,
  navItem3Field1: PropTypes.string.isRequired,
  navItem3Field2: PropTypes.string.isRequired,
  navItem3Field3: PropTypes.string.isRequired,
  navItem3Field4: PropTypes.string.isRequired,
  navBtn1: PropTypes.string.isRequired
}

NavBar.defaultProps = {
  title: 'Company name',
  navItem1: 'Item 1',
  navItem2: 'Item 2',
  navItem3: 'Item 3',
  navItem3Field1: 'Field 1',
  navItem3Field2: 'Field 1',
  navItem3Field3: 'Field 1',
  navItem3Field4: 'Field 1',
  navBtn1: 'Button 1'
}