import { Link } from "gatsby"
import React from "react"

import facebook from "../img/social/facebook.svg"
import instagram from "../img/social/instagram.svg"
import logo from "../img/gigleer_logo_pear.svg"
import linkedin from "../img/social/linkedin.svg"
import tiktok from "../img/social/tiktok.svg"

// eslint-disable-next-line react/display-name
const Footer = class extends React.Component {
    render() {
        return (
            <footer style={{backgroundColor: "#002A5C", paddingBottom:"5vh"}} className="footer has-text-white-ter">
                <div className="content has-text-centered">
                    <img
                        src={logo}
                        alt="Gigleer"
                        style={{ width: "14em", height: "10em" }}
                    />
                </div>
                <div className="social has-text-centered">
                    <h2 style={{fontSize:"3", fontWeight:"bold", color: "white", marginBottom:"1vh"}}>Follow us </h2>
                    <a title="facebook" href="https://facebook.com">
                        <img
                            src={facebook}
                            alt="Facebook"
                            style={{ width: "2em", height: "2em" }}
                        />
                    </a>
                    <a title="linkedin" href="https://linkedin.com">
                        <img
                            className="fas fa-lg"
                            src={linkedin}
                            alt="LinkedIn"
                            style={{ width: "2em", height: "2em" }}
                        />
                    </a>
                    <a
                        title="instagram"
                        href="https://instagram.com"
                    >
                        <img
                            src={instagram}
                            alt="Instagram"
                            style={{ width: "2em", height: "2em" }}
                        />
                    </a>
                    <a title="Tiktok" href="https://tiktok.com">
                        <img
                            src={tiktok}
                            alt="Tiktok"
                            style={{ width: "2em", height: "2em" }}
                        />
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer
