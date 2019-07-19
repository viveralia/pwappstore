import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const FeaturedCard = ({ app }) => {
  const { title, image } = app.frontmatter
  const img = image.childImageSharp.fluid
  const slug = title.replace(/\s/g, "-").toLowerCase()
  return (
    <StyledFeaturedCard>
      <article>
        {/* Image */}
        <Link to={`/app/${slug}`} className="image">
          <Image fluid={img} />
        </Link>
        {/* Info */}
        <div className="info">
          <h3>
            <Link to={`/app/${slug}`}>{title}</Link>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: app.html }} />
        </div>
      </article>
    </StyledFeaturedCard>
  )
}

const StyledFeaturedCard = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
  width: 85vw;
  white-space: pre-wrap;
  scroll-snap-align: start;
  :first-child {
    margin-left: 1.5rem;
  }
  :last-child {
    margin-right: 1.5rem;
  }
  .image {
    img {
      width: 100%;
      border-radius: 20px;
    }
  }
  .info {
    margin-top: 0.5rem;
    h3 {
      margin-bottom: 0.125rem;
      font-size: 1.125rem;
      font-weight: 500;
    }
    h3,
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-right: 1rem;
    }
  }
`

export default FeaturedCard
