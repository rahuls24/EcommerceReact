/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/reuseable/Footer"
import Navbar from "../components/reuseable/Navbar"
//import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import "../components/bootstrap.min.css"
import MyHero from "../components/reuseable/MyHero"
import MyHeading from "../components/reuseable/MyHeading"
import InfoBlock from "../components/reuseable/InfoBlock"
import DualInfoBlock from "../components/reuseable/DualInfoBlock"

import "../components/layout.css"

const About = ({ children }) => (
  <>
    <Navbar />
    {children}
    <StaticQuery
      query={query}
      render={data => (
        <Fragment>
          <MyHero
            img={data.bgImg.childImageSharp.fluid}
            title="title"
            subtitle="subtitle"
            heroClass="hero-bcg"
          />
        </Fragment>
      )}
    />
    <InfoBlock heading="About Us" />
    <DualInfoBlock
      heading="Our Team"
      imgSrc="https://i.ibb.co/RbYxVRv/pexels-photo-1261427.jpg"
    />

    <Footer />
  </>
)

About.propTypes = {
  children: PropTypes.node.isRequired,
}

const query = graphql`
  query {
    bgImg: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
