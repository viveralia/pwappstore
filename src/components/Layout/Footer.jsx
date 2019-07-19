import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; {new Date().getFullYear()}, PWAppstore. This is an opensource
        project
      </p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: var(--spacing);
  text-align: center;
  margin-top: auto;
  font-size: 85%;
`

export default Footer
