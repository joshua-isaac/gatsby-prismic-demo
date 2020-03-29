import React from 'react'
import { graph } from 'gatsby';
import Layout from '../components/layout'
import styled from 'styled-components'
import RichText from '../components/richText';

export const query = graphql`
query {
    prismic {
      allContact_pages {
        edges {
          node {
            form_title
            form_description
            form_fields {
              field_name
              field_type
              required
            }
          }
        }
      }
    }
  }
  
`

const Form = styled.form`
  padding: 10px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  input{
      margin-bottom: 15px;
      border-radius: 4px;
      border: 1px solid #fff;
      height: 40px;
      width: 100%;
      padding-left: 15px;
  }

  textarea{
    padding-left: 15px;
    margin-bottom: 15px;
    border-radius: 4px;
    border: 1px solid #fff;
    height: 100px;
    width: 100%;
    resize: none;
  }
`

const Button = styled.button`
  background: orange;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;
`

const ContentWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 15px;
`

const ContactUs = (props) => {
    console.log(props)
    return(
        <Layout>
            <ContentWrapper>
                <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_title} />
                <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_description} />
                <Form 
                    onSubmit={e => e.preventDefault()}
                    name="contact-us"
                    method="POST"
                    data-netlify="true"
                    action="/contact-sucess"
                >
                    <input type="hidden" name="form-name" value="contact-us" />
                    {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
                        if(field.field_type === 'textarea'){
                            return(
                                <div key={i}>
                                    <textarea placeholder={field.field_name} required={field.required === 'Yes'} />
                                </div>
                            )
                        } else {
                            return(
                                <div key={i}>
                                    <input type={field.field_type} placeholder={field.field_name} required={field.required === 'Yes'} />
                                </div>
                            )
                        }
                    })}
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </ContentWrapper>
        </Layout>
    )
}

export default ContactUs
