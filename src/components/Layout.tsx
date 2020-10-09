import "./all.sass"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import React from "react"
import useSiteMetadata from "./SiteMetadata"

const TemplateWrapper: React.FC = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link 
                    rel="shortcut icon" 
                    sizes="196x196" 
                    href={`${withPrefix("/")}img/favicon/android-chrome-192x192.png`}
                />
                <link 
                    rel="shortcut icon" 
                    sizes="512x512" 
                    href={`${withPrefix("/")}img/favicon/android-chrome-512x512.png`}
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix("/")}img/favicon/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/favicon/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/favicon/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix("/")}img/favicon/safari-pinned-tab.svg`}
                    color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta
                    property="og:image"
                    content={`${withPrefix("/")}img/signup_double.png`} 
                />
            </Helmet>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default TemplateWrapper
