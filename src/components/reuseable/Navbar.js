import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import { homedir } from "os"
export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navbarState: false,
      navbarClass: "collapse navbar-collapse",
      menus: [
        {
          id: 1,
          text: "Home",
          url: "/",
        },
        {
          id: 2,
          text: "About",
          url: "/About",
        },
        {
          id: 3,
          text: "Services",
          url: "/services",
        },
        {
          id: 4,
          text: "Contact",
          url: "/contact",
        },
      ],
    }
    this.toggleHandler = this.toggleHandler.bind(this)
  }
  toggleHandler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-theme text-while">
          <Link to="/" className="navbar-brand ml-5">
            <img src={logo} alt="logo comes here" width="40px" />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            onClick={this.toggleHandler}
          >
            <span className="text-while">menu</span>
          </button>
          <div className={this.state.navbarClass}>
            <ul className="navbar-nav ml-auto mr-5">
              {this.state.menus.map(menu => {
                return (
                  <li className="nav-item">
                    <Link to={menu.url} className="nav-link text-white">
                      {menu.text}
                    </Link>
                  </li>
                )
              })}
              <li className="nav-item text-white">
                <Link to="/" className="nav-link cartIcon">
                  <AddShoppingCartIcon />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
