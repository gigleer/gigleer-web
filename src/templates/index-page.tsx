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
    bgColor: string;
    textPosition: string;
    title: string;
    subheading: string;
    theme:Theme
    // companyId: string;
    // pool: object[];
    // setPool: (list: object[]) => void;
  };

    /* background-image: "url(${props => (props.image.childImageSharp ? props.image.childImageSharp.fluid.src : props.image)})"; */
    // ${props => (props.bgColor === "purple" ? "purple" : "white")};
    /* background-position: "top left";
    background-attachment: "fixed"; */

type Theme = {
    bgColor: string
    color: string
}

const Background = styled.div`
    height: 90vh;
    display: flex;
    line-height: 1;
    /* justify-content: center;  */
    flex-direction: column;
    /* margin-bottom: 10vh; */
`
// ${(p: Theme) => p.bgColor === "blue" ? themeBlue : "white"}
const BlueBackground = styled(Background)`
/* Make background color as a prop */
    background-color: #002A5C; 
`

const GreenBackground = styled(Background)`
/* Make background color as a prop */
    background-color: #F1FDF7;
`

const themeBlue = css`background-color: #002A5C; color: white;`;

/*${(p: Theme) => p.color === "blue" ? themeBlue : "white"}*/
const BigTitle = styled.h1`
    color: #002A5C;
    font-size: 3em;
    font-weight: bold;
`

const BigWhiteTitle = styled(BigTitle)`
    color: white;
`

const SmallTitle = styled.h3`
    color: #002A5C;
    font-size: 1.5em;
    font-weight: bold;
    /* max-width: 60%; */
`

const Description = styled.h3`
    color: #002A5C;
    font-weight: 300;
    /* max-width: 60%; */
`

const TwoColumn = styled.div`
    display:flex;
    flex-direction: row;
`
const ImageContainer = styled.div`
    border-radius:20%;
    background-color: #002A5C;
    
`
const RedButton = styled.button`
    background-color: #EE5A5A;
    color:white;
`
const BigFocalDiv:React.FC<inputProps> = props => {
    const {theme} = props
    return(
        <BlueBackground {...theme}>
            <TwoColumn>
                <div>
                    <BigWhiteTitle style={{maxWidth: "65%", marginTop: "20vh", marginLeft: "10vh"}} >{props.title}</BigWhiteTitle>
                    <SmallTitle >{props?.subheading}</SmallTitle>

                    <div style={{display:"flex", flexDirection:"row", marginTop:"10vh", marginLeft:"10vh"}}>
                        <div style={{marginTop:"18px", }}>
                            <MobileStoreButton
                                store="ios"
                                height={65}
                                url={"www.test.se"}
                                linkProps={{ title: 'iOS Store Button' }}
                            />
                        </div>

                        <MobileStoreButton
                            store="android"
                            height={100}
                            url={"www.test.se"}
                            linkProps={{ title: 'Play Store Button' }}
                        />
                    </div>
                </div>
                    {/* THROWS TYPEERROR IN THE CMS */}
                    {/* style={{ margin-top: "20vh", position: "relative", right: "10vh", bottom: "-10vh"}} */}
                <ImageContainer style={{marginTop: "20vh", position: "relative", right: "10vh", bottom: "-10vh"}}>
                    <Img fixed={props?.image?.childImageSharp?.fixed} />
                </ImageContainer>
            </TwoColumn>
        </BlueBackground>
    )
}

export const IndexPageTemplate = ({
    image,
    title,
    bgColor,
    howTo,
    intro
}: IndexPageTemplateProps) => (
    <div>
        <BigFocalDiv title={title} bgColor={bgColor} image={image} />
        
        <GreenBackground >
            <div className="container" style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column"}}>
                <Features gridItems={intro.blurbs} />
            </div>
        </GreenBackground>

        <Background style={{padding:"5vh"}}>
            <TwoColumn style={{width:"100%", justifyContent:"center"}}>
                {/* THROWS TYPEERROR IN THE CMS */}
                <ImageContainer style={{marginRight:"5vh"}}>
                    <Img fixed={image?.childImageSharp?.fixed} />
                </ImageContainer>

                <div style={{marginTop: "3vh"}}> 
                    {/* THESE THROWS TYPEERROR IN THE CMS WORKS IF COMMENTED*/}
                    <BigTitle>
                        {howTo.title}
                    </BigTitle>

                    {howTo.steps.map((step: object, index: number) => {
                        return(
                            <div style={{marginTop:"2vh", marginBottom:"2vh", lineHeight:"2"}} key={index}>
                                <SmallTitle  >{step.title}</SmallTitle>
                                <Description>{step.detail}</Description>
                            </div>
                        )
                    })}

                    <RedButton className="button">
                        Get started
                    </RedButton>
                </div> 
            </TwoColumn>
        </Background>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    bgColor:PropTypes.string,
    howTo: PropTypes.shape({
        steps: PropTypes.array
    }),
    // subheading: PropTypes.string,
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
                bgColor={post?.frontmatter?.bgColor}
                // subheading={post?.frontmatter?.subheading}
                howTo={post?.frontmatter?.howTo}
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
                bgColor

                howTo {
                    title
                    steps{
                        title
                        detail
                    }
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
                        title
                        text
                    }
                    heading
                    description
                }
            }
        }
    }
`
