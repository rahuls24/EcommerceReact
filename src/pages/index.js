import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import MyHero from "../components/reuseable/MyHero"

const IndexPage = data => (
  <Layout>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
