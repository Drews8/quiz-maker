import React, {Component} from "react";
import classes from "./Drawer.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";


class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose();
  }

  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })

  }

  handleKeyPress = event => {
    if (event.keyCode === 27) {
      this.props.onClose()
    }
  }

  render() {


    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close)
      document.removeEventListener('keydown', this.handleKeyPress)
    } else {
      document.addEventListener('keydown', this.handleKeyPress)
    }

    let links = [
      {to: '/', label: 'Список тестів', exact: true},]

    if (this.props.isAuthenticated) {
      links.push({to: '/quiz-creator', label: 'Створити тест', exact: false})
      links.push({to: '/logout', label: 'Вийти', exact: false})
    } else {
      links.push({to: '/auth', label: 'Авторизація', exact: false})
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks(links)}
          </ul>
        </nav>
        {this.props.isOpen
          ? <Backdrop
            onClick={this.props.onClose}
          /> : null}
      </React.Fragment>
    )
  }

}

export default Drawer