import React, { Component } from "react";
import MenuNav from "../components/MenuNav/MenuNav";
import Menu from "../components/Menu/Menu";
import "./App.css";

class App extends Component {
  state = {
    selection: "Starters",
  };
  handleMenuNavClick = (selection) => {
    this.setState({
      selection: selection,
    });
  };
  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="header-nav">Mark's Kitchen</div>
          <div className="header-menu-nav">
            <MenuNav menuNavClick={this.handleMenuNavClick} />
          </div>
          <div className="header-cart">Total: £0.00</div>
        </header>
        <section className="menu">
          <Menu current={this.state.selection} />
        </section>
      </div>
    );
  }
}

export default App;
