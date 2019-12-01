import React, { Component } from "react"
import MyHeading from "../reuseable/MyHeading"
//import { Img } from "gatsby"
import Img from "gatsby-image"
export default class Coursecart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: this.props.courses.edges,
      mycourses: this.props.courses.edges,
    }
  }

  render() {
    //  console.log(this.props.courses.edges)

    return (
      <div>
        <section className="py-5">
          <div className="container">
            <MyHeading title="Courses" />
            <div className="row">
              {this.state.mycourses.map(({ node }) => {
                return (
                  <div key={node.id} className="col-11 col-md-6 d-flex mx-auto">
                    <Img fixed={node.image.fixed} />
                    <div className="flex-glow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">{node.title}</h6>
                        <h6 className="mb-0 text-success">${node.price}</h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                      <button
                        className="btn btn-warning snipcart-add-item"
                        data-item-id={node.id}
                        data-item-price={node.price}
                        data-item-url="/paintings/starry-night"
                        data-item-description={node.description.description}
                        data-item-image={node.image.fixed.src}
                        data-item-name={node.title}
                      >
                        Join
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
