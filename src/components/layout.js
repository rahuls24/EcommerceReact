/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import Footer from "./reuseable/Footer"
import Navbar from "./reuseable/Navbar"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import "./bootstrap.min.css"
import MyHero from "../components/reuseable/MyHero"
import MyHeading from "../components/reuseable/MyHeading"
import InfoBlock from "../components/reuseable/InfoBlock"
import DualInfoBlock from "../components/reuseable/DualInfoBlock"
import Coursecart from "../components/cart/Coursecart"

import "./layout.css"

const Layout = ({ children }) => (
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
          <InfoBlock heading="About Us" />
          <Coursecart courses={data.courses} />

          <DualInfoBlock
            heading="Our Team"
            imgSrc="https://i.ibb.co/RbYxVRv/pexels-photo-1261427.jpg"
          />
        </Fragment>
      )}
    />

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const query = graphql`
  {
    bgImg: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Layout
