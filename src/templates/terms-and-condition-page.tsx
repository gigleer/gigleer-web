import { MarkdownRemark } from "types/graphql-types"
import { graphql } from "gatsby"
import Content, { HTMLContent } from "../components/Content"
import Layout from "../components/Layout"
import React, { useState } from "react"
import ReactMarkdown from 'react-markdown'
import styled from "styled-components"

interface TermsAndConditionTemplateProps {
    title?: string | null
    content?: {title: string; body: string }[] | null
    contentComponent?: React.FC<any>
}

const RedButton = styled.button`
    background-color: #f1fdf7;
    color: #002A5C;
    border-radius: .5em;
    font-size: 16px;
    font-weight: bold;
`

const ButtonContainer = styled.div`
    /* width: 100%;
    display: flex;
    justify-content: space-between; */
    margin-bottom: 20px;
    button {
        margin-right: 20px; 
    }
`

export const TermsAndConditionTemplate: React.FC<TermsAndConditionTemplateProps> = ({
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content
    const [selectedTerms, setSelectedTerms] = useState<string>(content && content[0].title || '')
    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <ButtonContainer>
                                {content?.map((term, i) => (
                                        <RedButton key={i} onClick={() => setSelectedTerms(term.title)} className="button">
                                            {term.title}
                                        </RedButton>
                                    ))}
                            </ButtonContainer>
                            <div>
                                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                    {content?.find(r => r.title === selectedTerms)?.title}
                                </h2>
                                <ReactMarkdown className="content">
                                    {content?.find(r => r.title === selectedTerms)?.body || ''}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface TermsAndConditionPageProps {
    data: {
        markdownRemark: MarkdownRemark
    }
}

const TermsAndConditionPage: React.FC<TermsAndConditionPageProps> = ({ data }) => {
    const { markdownRemark: post } = data
    console.log('post.html', post)
    return (
        <Layout>
            <TermsAndConditionTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter?.title}
                content={post.frontmatter?.terms}
            />
        </Layout>
    )
}

export default TermsAndConditionPage

export const termsAndConditionQuery = graphql`
    query TermsAndConditionPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                terms {
                    title
                    body
                }
            }
        }
    }
`
