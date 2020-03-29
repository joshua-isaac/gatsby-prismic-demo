import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SliceZone from '../components/sliceZone';

export const query = graphql`
query {
  prismic {
    allHomepas {
      edges {
        node {
          body {
            ... on PRISMIC_HomepaBodyHero {
              label
              type
              primary {
                hero_content
                hero_title
                background_image
              }
            }
            ... on PRISMIC_HomepaBodyCall_to_action_grid {
              type
              primary {
                section_title
              }
              fields {
                button_destination {
                  ... on PRISMIC_Page {
                    page_title
                    content
                    _meta {
                      uid
                    }
                  }
                }
                button_label
                call_to_action_title
                content
                featured_image
              }
            }
            ... on PRISMIC_HomepaBodyPrice_list {
              type
              primary {
                title
              }
              fields {
                price_list_description
                price_list_title
                price_per_month
                price_type
              }
            }
          }
        }
      }
    }
  }
}

`

const IndexPage = (props) => {
  console.log(props);
  return(
  <Layout>
    <SliceZone body={props.data.prismic.allHomepas.edges[0].node.body}></SliceZone>
  </Layout>
  )
}

export default IndexPage
