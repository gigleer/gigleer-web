import { Link } from "gatsby"
import React from "react"
import github from "../img/github-icon.svg"
import logo from "../img/gigleer_logo_pear.svg"

// eslint-disable-next-line react/display-name
const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: ""
        }
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: "is-active"
                      })
                    : this.setState({
                          navBarActiveClass: ""
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
                style={{position:"fixed", width:"100%", backgroundColor: "#002A5C"}}
            >
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item" title="Logo">
                            <img
                                src={logo}
                                alt="Gigleer"
                                style={{ width: "88px" }}
                            />
                        </Link>
                        {/* Hamburger menu */}
                        {/* <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                        >
                            <span />
                            <span />
                            <span />
                        </div> */}
                    </div>
                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        {/* <div className="navbar-start has-text-centered" >
                            <Link className="navbar-item" style={{color:"white"}} to="/about">
                                About
                            </Link>
                            <Link className="navbar-item" style={{color:"white"}} to="/products">
                                Products
                            </Link>
                            <Link className="navbar-item" style={{color:"white"}} to="/blog">
                                Blog
                            </Link>
                            <Link className="navbar-item" style={{color:"white"}} to="/contact">
                                Contact
                            </Link>
                            <Link
                                style={{color:"white"}}
                                className="navbar-item"
                                to="/contact/examples"
                            >
                                Form Examples
                            </Link>
                        </div> 
                        <div className="navbar-end has-text-centered">
                            <a
                                className="navbar-item"
                                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon">
                                    <img src={github} alt="Github" />
                                </span>
                            </a>
                        </div>*/}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
