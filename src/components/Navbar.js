import React from "react";
import { Link } from "gatsby";
import logo from '../img/logo.jpeg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
<<<<<<< HEAD
              <img src={logo} alt="Logo | Ngomez Engineering" style={{ width: '12em', height: "auto" }} />
=======
              <img src={logo} alt="Ngomez Engineering" style={{ width: '12em', height: "auto" }} />
>>>>>>> master
            </Link>
            {/* Hamburger menu */} 
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/mission">
                Mission
              </Link>
              <Link className="navbar-item" to="/metiers">
                Métiers
              </Link>
              {/* <Link className="navbar-item" to="/blog">
                Blog
              </Link> */}
              <Link className="navbar-item" to="/formations">
                Formations
              </Link>
              <Link className="navbar-item" to="/contact">
                Nous Contacter
              </Link>
              {/* <Link clasdns1.p04.nsone.netsName="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
