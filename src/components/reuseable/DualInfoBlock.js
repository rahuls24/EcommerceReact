import React, { Component } from "react"
import MyHeading from "./MyHeading"
import { Link } from "gatsby"
export default class DualInfoBlock extends Component {
  render() {
    return (
      <div>
        <section className="my-4 py-4 bg-theme">
          <MyHeading title={this.props.heading} />
          <div className="row">
            <div className="col-8 mx-auto">
              <p className="lead text-white mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti est velit facilis accusantium inventore, pariatur
                dolore odio tempora voluptates, ea labore non ratione.
                Asperiores neque quam non sit consequatur animi atque,
                perspiciatis tempora quod itaque veniam explicabo magnam quas
                dolor obcaecati placeat, voluptates nobis illo dicta, distinctio
                nulla fugiat deserunt quos. Repellendus recusandae dicta autem
                nam officia quo ea quis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque atque vel eveniet repellat error
                eligendi aliquid, accusantium cupiditate illo perspiciatis
                ratione iusto! Unde accusantium voluptatibus, sed maxime ullam
                harum ipsa consectetur distinctio reprehenderit esse placeat
                excepturi ducimus recusandae soluta ad iusto quasi possimus
                accusamus fuga libero. Ea voluptates, vero sunt nemo officiis
                laudantium inventore nostrum ratione vitae rem? Itaque, officia
                doloremque nulla perspiciatis cumque velit aut sequi praesentium
                veniam natus earum deleniti molestiae quod dolores facilis
                reprehenderit ex pariatur quisquam. Reprehenderit quam saepe
                repudiandae aliquid quas perspiciatis id provident ad magni
                dolor ullam, dicta consequuntur quo perferendis quod molestiae
                optio.
              </p>
            </div>
            <div className="col-4">
              <div className="card bg-dark">
                <img
                  src={this.props.imgSrc}
                  class="card-img-top"
                  alt="Image goes here"
                />
                <div className="card-body">
                  <h5 className="card-title text-white">Card title</h5>
                  <p className="card-text text-white ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi ratione ut vero consequatur consectetur veniam quam
                    eius, libero non natus vitae aliquam nostrum pariatur
                    placeat eveniet, eum nulla dolorum dolor
                  </p>
                  <Link href="#" className="btn btn-warning btn-block">
                    {this.props.heading}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
