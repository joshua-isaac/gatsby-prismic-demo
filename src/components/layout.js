/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto;
`

const NavLink = styled.div`
  margin: auto 0;
  a{
    color: white;
    padding: 0 15px;
    text-decoration: none;
    transition: 0.3s ease;
    font-size: 16px;
    font-weight: bold;
    &:hover{
      color: orange;
    }
  }
`

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`

const Header = styled.header`
  display: flex;
  background: black;
  height: 66px;
  padding: 0 15px;
  box-sizing: border-box;
`

const Branding = styled.div`
margin: auto 0;
a{
  color: orange;
  font-weight: bold;
  font-size: 22px;
}
`

const navigationQuery = graphql`
query {
  prismic {
    allNavigations {
      edges {
        node {
          branding
          navigation_link {
            label
            link {
              ... on PRISMIC_Contact_page {
                form_title
                form_description
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Page {
               _meta{
                uid
              }
              }
            }
          }
        }
      }
    }
  }
}
`

const Layout = ({ children }) => {
  return (
    <>
        <Header>
        <StaticQuery 
          query={`${navigationQuery}`}
          render={(data) => {
            return(
              <>
              <Branding>
              <Link to="/">
                {data.prismic.allNavigations.edges[0].node.branding}
              </Link>
              </Branding>
              <NavLinks>
                {
                  data.prismic.allNavigations.edges[0].node.navigation_link.map((link) => (
                    <NavLink key={link.link._meta.uid}>
                      <Link to={`/${link.link._meta.uid}`}>
                        {link.label}
                      </Link>
                    </NavLink>
                  ))
                }
              </NavLinks>
              </>
            )
          }}
          />
          </Header>
        <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
