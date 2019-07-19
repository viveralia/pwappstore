import React from "react"
import Layout from "../components/Layout/Layout"
import FeaturedAppsList from "../components/Featured/FeaturedAppsList"
import AppsList from "../components/Apps/AppsList"
import { graphql } from "gatsby"

export const query = graphql`
  {
    topApps: allMarkdownRemark(
      sort: { fields: frontmatter___numberOfDownloads, order: DESC }
      limit: 5
    ) {
      edges {
        node {
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
        }
      }
    }
    newestApps: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      edges {
        node {
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
        }
      }
    }
  }
`

const index = ({ data }) => {
  const topApps = data.topApps.edges
  const newestApps = data.newestApps.edges
  return (
    <Layout isHome>
      <FeaturedAppsList />
      <AppsList
        title="Top Apps"
        description="The best and most popular Progressive Web Apps at the moment."
        apps={topApps}
      />
      <AppsList
        title="Newest Apps"
        description="Recently added Progressive Web Apps that are worth checking out."
        apps={newestApps}
      />
    </Layout>
  )
}

export default index
