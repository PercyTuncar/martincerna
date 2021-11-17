import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import VideoBackground from '../components/VideoBackground'
import Layout from '../components/Layout'
import Body from '../components/Body'

 

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home"> 
    <VideoBackground/>
    <Body/>
    <a href="https://api.whatsapp.com/send?phone=51936485262&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." class="float" target="_blank">
<i class="fa fa-whatsapp my-float"><img src="https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/whatsapp.svg?alt=media&token=41668558-4d5c-4df1-a6b6-2dd49af081a0"/></i>
</a>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />

  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
