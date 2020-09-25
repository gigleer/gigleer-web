import { Link } from "gatsby"
import React from "react"
import logo from "../img/gigleer_logo_pear.svg"
import styled from "styled-components"


const NavMenue = styled.div`
    background-color: #002A5C;
    
    @media(max-width: 768px) {
        border-bottom: 2px solid #00224b;
    }
`

const NavLinks  = styled.div`
    margin-left: 0;
    padding-left: 2vh;
    padding-right: 2vh;
    /* display: flex;
    flex-direction: row;

    @media(max-width: 1024) {
        display: block;
    } */
`
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
                style={{position:"fixed", width:"100%", backgroundColor: "#002A5C", marginBottom: "10vh", borderBottom: "solid 1px rgb(255 255 255 / 16%)"}}
            >
                {/* container */}
                <NavLinks className="container">
                {/* style={{width:"100%"}} */}
                    <div className="navbar-brand" >
                        <Link to="/" className="navbar-item" title="Logo">
                            <img
                                src={logo}
                                alt="Gigleer"
                                style={{ width: "88px" }}
                            />
                        </Link>
                        {/* Hamburger menu */}
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                            style={{color: "#f1fdf7", backgroundColor: "#002A5C"}}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                        style={{backgroundColor: "#002A5C"}}
                        >
                        <div className="navbar-start has-text-centered" 
                            onClick={() => { this.toggleHamburger() }}
                            >
                            <Link className="navbar-item gigleer-link" to="/">
                                Home
                            </Link>
                            <Link className="navbar-item gigleer-link" to="/contact">
                                Contact
                            </Link>
                        </div> 
                    </div>
                </NavLinks>
            </nav>
        )
    }
}

export default Navbar
