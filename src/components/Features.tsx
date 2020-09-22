import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import PropTypes from "prop-types"
import React from "react"
import styled, {css} from "styled-components"

const SmallTitle = styled.h3`
    color: #002A5C;
    font-size: 1.5em;
    font-weight: bold;
    margin:1em;
    /* max-width: 60%; */
`

const Description = styled.h3`
    color: #002A5C;
    font-weight: 300;
    text-align:center
    /* max-width: 60%; */
`

const FeatureGrid = ({ gridItems }) => {
    return(
    <div className="columns">
        {gridItems.map(item => {
        return(
            <div key={item.text} className="column is-4">
                <section className="section" >
                    <div className="has-text-centered">
                        <div
                            style={{
                                width: "240px",
                                display: "inline-block"
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={item} />
                        </div>
                    </div>
                    <SmallTitle className="has-text-centered">{item.title}</SmallTitle>
                    <Description>{item.text}</Description>
                </section>
            </div>
        )})}
    </div>
)}

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            title: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default FeatureGrid
