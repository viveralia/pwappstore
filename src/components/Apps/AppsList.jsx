import React from "react"
import AppCard from "./AppCard"
import styled from "styled-components"
import { Link } from "gatsby"

const AppsList = ({ title, description, apps }) => {
  const slug = title.replace(/\s/g, "-").toLowerCase()
  return (
    <StyledAppList>
      <header>
        <h2>{title}</h2>
        <Link to={`/${slug}`}>View all</Link>
      </header>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="scroll">
        <ul>
          {apps.map((app, i) => (
            <AppCard key={i} app={app.node} />
          ))}
        </ul>
      </div>
    </StyledAppList>
  )
}

const StyledAppList = styled.section`
  margin-top: 1rem;
  padding-bottom: 2.5rem;
  border-bottom: var(--border);
  header {
    padding: var(--spacing);
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 1.25rem;
    }
    a {
      color: var(--actionText);
    }
  }
  .description {
    padding: 0 1.5rem;
    margin-bottom: 1.25rem;
  }
  .scroll {
    overflow: hidden;
    height: 174px;
    ul {
      white-space: nowrap;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 2rem;
    }
  }
`

export default AppsList
