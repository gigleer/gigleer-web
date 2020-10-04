import { IndexPageTemplate } from "../../templates/index-page"
import PropTypes from "prop-types"
import React from "react"

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(["data"]).toJS()

    if (data) {
        return (
            <IndexPageTemplate
                image={data.image}
                title={data.title}
                bgColor={data.bgColor}
                howTo={data.howTo}
                keyFeatures={data.keyFeatures}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    getAsset: PropTypes.func
}

export default IndexPagePreview
