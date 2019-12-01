import React, { Component } from "react"

export default class MyHeading extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col text-center mb-4">
            <h1 className="display-3">{this.props.title}</h1>
          </div>
        </div>
      </div>
    )
  }
}
