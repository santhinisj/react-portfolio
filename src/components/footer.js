import React from "react";
import axios from "axios";

export default class Footer extends React.Component {
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
    console.log("data - - - - - - - - - - - - - >", data);
    this.setState({ data });
  }
  render() {
    return (
      <footer className="flex-container">
        <div>Designed and Developed by Santhini Sasidharan.</div>
        <div>
          {this.state.data.map((item, i) => {
            return (
              <div className="social-media-wrapper" key={i}>
                <a href={item.url}>
                  <p>{item.title}</p>
                </a>
              </div>
            );
          })}
        </div>
      </footer>
    );
  }
}
