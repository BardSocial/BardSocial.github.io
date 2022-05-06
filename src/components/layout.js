import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import theme from '../themes/brand'
import Navbar from "./navbar";
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from 'styled-components';

import "./layout.css"


const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
  }

  input {
    all: unset;
  }
`

const Layout = ({ children }) => {
  console.log(theme)

  return (
    <Auth0Provider
      domain="dev-sep7172g.us.auth0.com"
      clientId="BW6LuRzhBMaWLWLOfsmPWs0ATBkeuuN2"
      redirectUri={window.location.origin}
      audience="bard-api"
      scope=""
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Navbar/>
          <main>{children}</main>
        </ThemeProvider>
      </div>
    </Auth0Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
