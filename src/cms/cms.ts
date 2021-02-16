import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
import uploadcare from "netlify-cms-media-library-uploadcare"

import AboutPagePreview from "./preview-templates/AboutPagePreview"
// import BlogPostPreview from "./preview-templates/BlogPostPreview"
import IndexPagePreview from "./preview-templates/IndexPagePreview"
// import ProductPagePreview from "./preview-templates/ProductPagePreview"
import TermsAndConditionPreview from "./preview-templates/TermsAndConditionPagePreview"

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("terms-and-condition", TermsAndConditionPreview)
// CMS.registerPreviewTemplate("products", ProductPagePreview)
// CMS.registerPreviewTemplate("blog", BlogPostPreview)
