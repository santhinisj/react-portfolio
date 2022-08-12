import React from "react";
import axios from "axios";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const { data } = await axios.get(
      "https://portfolio-ssj.herokuapp.com/api/socialmedia"
    );

    this.setState({ data });
  }
  render() {
    return (
      <React.Fragment>
        <header id="main-nav" className="flex-container">
          <div className="flex-container" id="logo">
            <span id="firstName">SANTHINI</span>
            <span id="lastName">SASIDHARAN</span>
          </div>
          <img src="images/hamburger.png" alt="Hamburger Icon" id="hamburger" />

          <nav id="menu-nav">
            <ul className="flex-container">
              {this.state.data.map((item, i) => {
                return (
                  <li key={i}>
                    <a href={item.url} target="_blank">
                      {item.title}
                    </a>{" "}
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul className="flex-container" id="hidden-menu">
            {this.state.data.map((item, i) => {
              return (
                <li key={i}>
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>{" "}
                </li>
              );
            })}
          </ul>
        </header>
      </React.Fragment>
    );
  }
}
