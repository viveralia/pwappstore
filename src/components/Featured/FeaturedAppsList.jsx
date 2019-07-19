import React from "react"
import styled from "styled-components"
import FeaturedCard from "./FeaturedCard"
import { graphql, useStaticQuery } from "gatsby"

const getFeatured = graphql`
  {
    featuredApps: allMarkdownRemark(
      filter: { frontmatter: { isFeatured: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
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
    }
  }
`

const FeaturedAppsList = () => {
  const response = useStaticQuery(getFeatured)
  const apps = response.featuredApps.edges
  return (
    <StyledFeatured>
      <h2>Featured Apps</h2>
      <div className="scroll">
        <ul>
          {apps.map((app, i) => (
            <FeaturedCard key={i} app={app.node} />
          ))}
        </ul>
      </div>
    </StyledFeatured>
  )
}

const StyledFeatured = styled.section`
  margin-top: 1rem;
  padding-bottom: 2.5rem;
  border-bottom: var(--border);
  h2 {
    padding: var(--spacing);
    font-size: 1.25rem;
  }
  .scroll {
    overflow: hidden;
    height: calc(54.5vw + 54px);
    ul {
      white-space: nowrap;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 2rem;
    }
  }
`

export default FeaturedAppsList
