import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import React from 'react'
import styled from "styled-components"

const BlueButton = styled.button`
    background-color: #002A5C;
    color:white;
    border-radius: .5em;
`

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isValidated: false }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch(error => alert(error))
    }

    render() {
        return (
            <Layout>
                <section className="section" style={{height:"70vh", paddingTop:"10vh"}}>
                    <div className="container" style={{backgroundColor:"#EE5A5A", borderRadius:"2em", padding:"2vh 1vh 1vh 1vh"}}>
                        <h1 style={{fontSize:"1.5em", color: "#002A5C", fontWeight:"bold", margin:"0 0 1em 1em"}}>Have a question?</h1>
                        <div className="content" style={{padding:"5vh", backgroundColor:"#FBE3D8", borderRadius:"2em"}}>
                            <h1 style={{fontSize:"1.5em", marginTop:0, color: "#002A5C", fontWeight:"bold"}}>Contact us here</h1>
                            <form
                                name="contact"
                                method="post"
                                action="/contact/thanks/"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={this.handleSubmit}
                            >
                                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />
                                <div hidden>
                                    <label>
                                        Don’t fill this out:{" "}
                                        <input
                                            name="bot-field"
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor={"name"}>
                                        Your name
                                    </label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type={"text"}
                                            name={"name"}
                                            onChange={this.handleChange}
                                            id={"name"}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor={"email"}>
                                        Email
                                    </label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type={"email"}
                                            name={"email"}
                                            onChange={this.handleChange}
                                            id={"email"}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label
                                        className="label"
                                        htmlFor={"message"}
                                    >
                                        Message
                                    </label>
                                    <div className="control">
                                        <textarea
                                            className="textarea"
                                            name={"message"}
                                            onChange={this.handleChange}
                                            id={"message"}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className="field" style={{display:"flex", flexDirection:"row-reverse"}}>
                                    <BlueButton
                                    // is-link
                                        className="button "
                                        type="submit"
                                    >
                                        Send
                                    </BlueButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
