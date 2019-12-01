import React, { Component } from "react"
import MyHeading from "./MyHeading"
import { Link } from "gatsby"

export default class InfoBlock extends Component {
  render() {
    return (
      <div>
        <section className="bg-theme my-5 py-4">
          <div className="container">
            <MyHeading title={this.props.heading} />
            <div className="row">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-white mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora quis inventore dignissimos maxime qui quia, numquam
                  libero labore fuga ipsa veniam quo obcaecati eveniet,
                  accusantium nulla quam sint sequi expedita dicta
                  necessitatibus illum voluptates pariatur? Mollitia cum
                  doloribus iste minus! Sequi fugiat perspiciatis consectetur
                  non laborum et nostrum nobis praesentium commodi? Nulla
                  possimus, adipisci voluptatibus nesciunt commodi vero error!
                  Ducimus.
                </p>
                <Link to="/about">
                  <button className="btn btn-warning btn-lg">
                    {this.props.heading}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
