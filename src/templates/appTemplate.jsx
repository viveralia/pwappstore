import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { IoMdOpen } from "react-icons/io"

export const query = graphql`
  query($title: String!) {
    app: markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        category
        icon {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      html
    }
  }
`

const appTemplate = ({ data }) => {
  const { title, category, icon } = data.app.frontmatter
  const iconImg = icon.childImageSharp.fluid
  const html = data.app.html
  return (
    <Layout title={title}>
      <StyledApp>
        <header>
          <div className="icon">
            <Image fluid={iconImg} />
          </div>
          <div className="info">
            <h1>{title}</h1>
            <p>{category}</p>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdOpen />
              <span>Launch app</span>
            </a>
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: html }} className="body" />
      </StyledApp>
    </Layout>
  )
}

const StyledApp = styled.article`
  margin-top: 1rem;
  padding: var(--spacing);
  header {
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: var(--border);
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    .icon {
      width: 100px;
      height: 100px;
      margin-right: 1.75rem;
      img {
        border-radius: 10px;
      }
    }
    .info {
      max-width: calc(100% - 130px);
      h1,
      p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      h1 {
        font-size: 1.375rem;
        font-weight: 700;
      }
      a {
        background: var(--actionBg);
        color: var(--actionText);
        max-width: 150px;
        padding: 0.5rem 0.75rem;
        margin-top: 0.75rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          margin-left: 0.5rem;
        }
      }
    }
  }
  .body {
    color: var(--mainFill);
    line-height: 1.5;
  }
`

export default appTemplate
