import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, {css} from "styled-components"
import Img from "gatsby-image"

import MobileStoreButton from 'react-mobile-store-button';

import { IndexPageTemplateQuery } from "types/graphql-types"
import BlogRoll from "../components/BlogRoll"
import Features from "../components/Features"
import Layout from "../components/Layout"
// import { BigFocalDiv } from 'src/components/bigFocalDiv'

type IndexPageTemplateProps = RecursiveNonNullable<
    IndexPageTemplateQuery
>["markdownRemark"]["frontmatter"]

type inputProps  = {
    bgColor: "blue" | "red" | "green";
    textPosition: string;
    title: string;
    subheading: string;
    // companyId: string;
    // pool: object[];
    // setPool: (list: object[]) => void;
  };

    /* background-image: "url(${props => (props.image.childImageSharp ? props.image.childImageSharp.fluid.src : props.image)})"; */
    // ${props => (props.bgColor === "purple" ? "purple" : "white")};
    /* background-position: "top left";
    background-attachment: "fixed"; */

const Background = styled.div`
/* Make background color as a prop */
    /* background-color: #002A5C; */
    ${(p: {bgColor: string}) => p.bgColor === "purple" ? themePurple : "white"}
    
    height: 100vh;
    display: flex;
    line-height: 1;
    /* justify-content: center;  */
    flex-direction: column;
`

const themePurple = css`background-color: purple; color: white;`;

const BigTitle = styled.h1`
    ${(p: {bgColor: string}) => p.bgColor === "purple" ? themePurple : "white"}
    max-width: 70%;
    margin-top: 20vh;
    margin-left: 10vh;
`
const SubTitle = styled.p`
    max-width: 60%;
`

const TwoColumn = styled.div`
    display:flex;
    flex-direction: row;
`

const ImageContainer = styled.div`
    margin-top: 20vh;
    background-color: #002A5C;
    border-radius:10px;
`

const BigFocalDiv:React.FC<inputProps> = props => (
    <Background bgColor={''}>
        <TwoColumn>
            <div>
                <BigTitle className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">{props.title}</BigTitle>
                <SubTitle className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen" >{props?.subheading}</SubTitle>
                <div style={{display:"flex", flexDirection:"row", marginTop:"10vh", marginLeft:"10vh"}}>
                    <div style={{marginTop:"18px", }}>
                        <MobileStoreButton
                            store="ios"
                            height={"65px"}
                            url={"www.test.se"}
                            linkProps={{ title: 'iOS Store Button' }}
                        />
                    </div>

                    <MobileStoreButton
                        store="android"
                        height={"100px"}
                        url={"www.test.se"}
                        linkProps={{ title: 'Play Store Button' }}
                    />
                </div>
            </div>
            <ImageContainer>
                <Img fixed={props?.image.childImageSharp.fixed} />
            </ImageContainer>
        </TwoColumn>
    </Background>
  )


export const IndexPageTemplate = ({
    image,
    title,
    heading,
    // subheading,
    mainpitch,
    description,
    intro
}: IndexPageTemplateProps) => (
    <div>
        <BigFocalDiv title={title} image={image} />

        <section className="section section--gradient">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <div className="tile">
                                        <h1 className="title">
                                            {mainpitch.title}
                                        </h1>
                                    </div>
                                    <div className="tile">
                                        <h3 className="subtitle">
                                            {mainpitch.description}
                                        </h3>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-12">
                                        <h3 className="has-text-weight-semibold is-size-2">
                                            {heading}
                                        </h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <Features gridItems={intro.blurbs} />
                                <div className="columns">
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/products">
                                            See all products
                                        </Link>
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        Latest stories
                                    </h3>
                                    <BlogRoll />
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/blog">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    // subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array
    })
}

const IndexPage = ({
    data
}: {
    data: RecursiveNonNullable<IndexPageTemplateQuery>
}) => {
    const { markdownRemark: post } = data
    return (
        <Layout>
            <IndexPageTemplate
                image={post?.frontmatter?.image}
                title={post?.frontmatter?.title}
                heading={post?.frontmatter?.heading}
                // subheading={post?.frontmatter?.subheading}
                mainpitch={post?.frontmatter?.mainpitch}
                description={post?.frontmatter?.description}
                intro={post?.frontmatter?.intro}
            />
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxHeight: 1500, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                        fixed (height: 1000)  {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                heading

                mainpitch {
                    title
                    description
                }
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        text
                    }
                    heading
                    description
                }
            }
        }
    }
`
