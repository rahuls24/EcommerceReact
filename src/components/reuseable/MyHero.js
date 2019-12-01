import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import { minHeight } from "@material-ui/system"
export default class MyHero extends Component {
  render() {
    return (
      <div>
        <BackgroundImage
          className={this.props.heroClass}
          fluid={this.props.img}
        >
          <div className="text-white text-uppercase text-center display-4">
            <h1>{this.props.title}</h1>
          </div>
          <div>
            <h4 className="text-warning">{this.props.subtitle}</h4>
          </div>
        </BackgroundImage>
      </div>
    )
  }
}
