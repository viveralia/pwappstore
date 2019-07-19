import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const AppCard = ({ app }) => {
  const { title, category, icon } = app.frontmatter
  const slug = title.replace(/\s/g, "-").toLowerCase()
  const iconImg = icon.childImageSharp.fluid
  return (
    <StyledAppCard>
      <Link to={`/app/${slug}`}>
        <article>
          <div className="image">
            <Image fluid={iconImg} />
          </div>
          <div className="info">
            <h3>{title}</h3>
            <h4>{category}</h4>
          </div>
        </article>
      </Link>
    </StyledAppCard>
  )
}

const StyledAppCard = styled.li`
  display: inline-block;
  margin: 0 0.275rem;
  width: 125px;
  white-space: pre-wrap;
  scroll-snap-align: start;
  text-align: center;
  border: var(--border);
  border-radius: 10px;
  padding: 1rem;
  :first-child {
    margin-left: 1.5rem;
  }
  :last-child {
    margin-right: 1.5rem;
  }
  .image {
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .info {
    margin-top: 0.5rem;
    h3,
    h4 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    h3 {
      margin-bottom: 0.125rem;
      font-size: 0.975rem;
      font-weight: 400;
    }
    h4 {
      color: var(--muted);
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`

export default AppCard
