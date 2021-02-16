import { TermsAndConditionTemplate } from "../../templates/terms-and-condition-page"
import PropTypes from "prop-types"
import React from "react"

const TermsAndConditionPreview = ({ entry, widgetFor }) => (
    <TermsAndConditionTemplate
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
    />
)

TermsAndConditionPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
}

export default TermsAndConditionPreview
