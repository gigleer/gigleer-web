import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import PropTypes from "prop-types"
import React from "react"

const FeatureGrid = ({ gridItems }) => {
    return(
    <div className="columns">
        {gridItems.map(item => {
        return(
            <div key={item.text} className="column is-4">
                <section className="section">
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
                    <h3 className="has-text-centered">{item.title}</h3>
                    <p>{item.text}</p>
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
