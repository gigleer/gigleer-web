import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, {css} from "styled-components"
import Img from "gatsby-image"

import MobileStoreButton from 'react-mobile-store-button';

import { IndexPageTemplateQuery } from "types/graphql-types"
import Features from "../components/Features"
import Layout from "../components/Layout"

import facebook from "../img/social/facebook.svg"
import instagram from "../img/social/instagram.svg"
import linkedin from "../img/social/linkedin.svg"
import tiktok from "../img/social/tiktok.svg"

type IndexPageTemplateProps = RecursiveNonNullable<
    IndexPageTemplateQuery
>["markdownRemark"]["frontmatter"]

type inputProps  = {
    bgColor: string;
    textPosition: string;
    title: string;
    theme:Theme
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
    height: 100%;
    min-height: 90vh;
    display: flex;
    line-height: 1;
    flex-direction: column;
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

    @media(max-width: 768px) {
        font-size: 2em;
    }
`

const BigWhiteTitle = styled(BigTitle)`
    color: #f1fdf7;
`

const SmallTitle = styled.h3`
    color: #002A5C;
    font-size: 1.5em;
    font-weight: bold;
    
    @media(max-width: 768px) {
        font-size: 1em;
    }
`
const SmallLightTitle = styled(SmallTitle)`
    color: #f1fdf7;
`

const Description = styled.h3`
    color: #002A5C;
    font-weight: 300;
`

const TwoColumn = styled.div`
    display:flex;
    flex-direction: row;
`
const ImageContainer = styled.div`
    min-width: 500px;
    display: block;
    @media(max-width: 768px) {
        min-width: 250px;
        display: none;
    }
`
const RedButton = styled.button`
    background-color: #EE5A5A;
    color: white;
    border-radius: .5em;
`

const LightButton = styled.button`
    background-color: #f1fdf7;
    color: #002A5C;
    border-radius: .5em;
`

const OnlyDesktop = styled.div`
    display: block;
    @media(max-width: 768px) {
        display: none;
    }
`

const LeftColumn = styled.div`
    max-width: 65%;
    margin-top: 10vh;
    @media(max-width: 768px) {
        max-width: 95%;
    }
`

const BigFocalDiv:React.FC<inputProps> = props => {
    const {theme} = props
    return(
        <BlueBackground {...theme}>
            <div style={{display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent:"center"}}>
            {/* className="rows"   className="col-sm" */}
                <LeftColumn className="column is-8" >
                {/* maxWidth: "65%",  style={{  }} marginLeft: "10vh" */}
                    <BigWhiteTitle >{props.title}</BigWhiteTitle>
                    {/* display:"flex", flexDirection:"column", */}
                    <div style={{ marginTop:"10vh"}}>
                        <SmallLightTitle>We will soon launch our service</SmallLightTitle>
                        <Description style={{margin: "1em 0 1em 0", color: "white"}}>Sign up for our latest news</Description>
                        
                        <Link to="/contact" title="Sign up" style={{marginBottom:"2em"}}>
                            <LightButton className="button">Sign up</LightButton>
                        </Link>

                        {/* <div style={{marginTop:"18px", }}>
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
                        /> */}
                        {/*  */}
                    </div>
                    <div style={{marginTop: "5vh", marginBottom:"5vh"}} className="social" >
                        <h2 style={{fontSize:"3", fontWeight:"bold", color: "white", marginBottom:"2vh"}}>Follow us </h2>
                        <a title="facebook" href="https://facebook.com">
                            <img
                                src={facebook}
                                alt="Facebook"
                                style={{ width: "2em", height: "2em" }}
                            />
                        </a>
                        <a title="linkedin" href="https://linkedin.com">
                            <img
                                className="fas fa-lg"
                                src={linkedin}
                                alt="LinkedIn"
                                style={{ width: "2em", height: "2em" }}
                            />
                        </a>
                        <a
                            title="instagram"
                            href="https://instagram.com"
                        >
                            <img
                                src={instagram}
                                alt="Instagram"
                                style={{ width: "2em", height: "2em" }}
                            />
                        </a>
                        <a title="Tiktok" href="https://tiktok.com">
                            <img
                                src={tiktok}
                                alt="Tiktok"
                                style={{ width: "2em", height: "2em" }}
                            />
                        </a>
                    </div>
                </LeftColumn>
                    {/* THROWS TYPEERROR IN THE CMS */}
                    {/* position: "relative", right: "10vh", bottom: "-10vh" style={{marginTop: "20vh", flexBasis:"20%",}}*/}
                <ImageContainer style={{width:"150px", marginBottom: "5vh", marginTop: "5vh"}}>
                    <Img fluid={props?.image?.childImageSharp?.fluid} />
                </ImageContainer>
            </div>
            
        </BlueBackground>
    )
}

export const IndexPageTemplate = ({
    image,
    title,
    bgColor,
    howTo,
    keyFeatures
}: IndexPageTemplateProps) => (
    <div>
        <BigFocalDiv title={title} bgColor={bgColor} image={image} />
        
        <GreenBackground >
            <div className="container" style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column"}}>
                <Features gridItems={keyFeatures} />
            </div>
        </GreenBackground>

        <Background style={{padding:"5vh"}}>
            <TwoColumn style={{width:"100%", justifyContent:"center"}}>
                {/* THROWS TYPEERROR IN THE CMS */}

                <OnlyDesktop>
                    <Img style={{marginRight:"5vh"}} fixed={howTo.image?.childImageSharp?.fixed} />
                </OnlyDesktop>
                <div style={{marginTop: "3vh"}}> 
                    {/* THESE THROWS TYPEERROR IN THE CMS WORKS IF COMMENTED*/}
                    <BigTitle>
                        {howTo.title}
                    </BigTitle>

                    {howTo.steps.map((step: {title: string; detail: string}, index: number) => {
                        return(
                            <div style={{marginTop:"2vh", marginBottom:"2vh", lineHeight:"2"}} key={index}>
                                <SmallTitle  >{step.title}</SmallTitle>
                                <Description>{step.detail}</Description>
                            </div>
                        )
                    })}

                    <Link to="/contact" title="Sign up" style={{marginBottom:"2em"}}>
                        <RedButton className="button">
                            Get started
                        </RedButton>
                    </Link>
                </div> 
            </TwoColumn>
        </Background>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    bgColor:PropTypes.string,
    howTo: PropTypes.shape({
        steps: PropTypes.array
    }),
    keyFeatures: PropTypes.array
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
                bgColor={post?.frontmatter?.bgColor}
                howTo={post?.frontmatter?.howTo}
                keyFeatures={post?.frontmatter?.keyFeatures}
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
                        fluid(maxHeight: 800, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                        fixed (height: 1000)  {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                bgColor

                howTo {
                    title
                    image {
                        childImageSharp {
                            fluid(maxWidth: 240, quality: 64) {
                                ...GatsbyImageSharpFluid
                            }
                            fixed (height: 1000)  {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    steps{
                        title
                        detail
                    }
                }

                keyFeatures {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 200, quality: 64) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    title
                    text
                }
            }
        }
    }
`
