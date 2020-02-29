import React, {Component} from "react";
import classes from "./Drawer.module.css"


const links = [1, 2, 3]

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li
          key={index}
        >
          Link {link}
        </li>
      )
    })

  }

  render() {

    return (
      <nav className={classes.Drawer}>
        <ul>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }

}

export default Drawer