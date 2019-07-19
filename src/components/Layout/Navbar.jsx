import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import { IoIosArrowBack, IoIosSearch } from "react-icons/io"

const getSiteTitle = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Navbar = ({ title, isHome = false }) => {
  const response = useStaticQuery(getSiteTitle)
  const siteTitle = response.site.siteMetadata.title
  return (
    <StyledNav>
      <div className="back">
        {!isHome && (
          <Link to="/">
            <IoIosArrowBack />
          </Link>
        )}
      </div>
      <h1>{title || siteTitle}</h1>
      <div className="search">
        <Link to="/search">
          <IoIosSearch />
        </Link>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  padding: var(--spacing);
  border-bottom: var(--border);
  text-align: center;
  color: var(--mainFill);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: #fff;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  .back,
  .search {
    font-size: 1.125rem;
    padding-top: 3px;
    margin-bottom: -3px;
    color: var(--mutedFill);
  }
  .back {
    text-align: left;
  }
  .search {
    text-align: right;
  }
  h1 {
    font-weight: 600;
    font-size: 1.125rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export default Navbar
