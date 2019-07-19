import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./global.css"
import styled from "styled-components"

const Layout = ({ children, title, isHome }) => {
  return (
    <StyledLayout>
      <Navbar title={title} isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    padding-top: 50px;
  }
`

export default Layout
