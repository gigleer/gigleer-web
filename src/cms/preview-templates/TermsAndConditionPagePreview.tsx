import { TermsAndConditionTemplate } from "../../templates/terms-and-condition-page"
import PropTypes from "prop-types"
import React from "react"

const TermsAndConditionPreview = ({ entry }) => {
    const data = entry.getIn(["data"]).toJS()
    return <TermsAndConditionTemplate content={data.terms}/>
}

TermsAndConditionPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
}

export default TermsAndConditionPreview
