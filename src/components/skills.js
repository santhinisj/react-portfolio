import React from "react";
import axios from "axios";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const { data } = await axios.get(
      "https://portfolio-ssj.herokuapp.com/api/skills"
    );

    this.setState({ data });
  }
  render() {
    return (
      <article id="technical-skill-section">
        <h2>Technical skill set</h2>
        <p>
          I’m constantly learning and keep up to date with the latest
          technologies, so I can pick the best tech for the job.
        </p>
        <div className="flex-container" id="technical-skill-container">
          {this.state.data.map((item, i) => {
            return (
              <div className="technical-skill-wrapper" key={i}>
                <h3>
                  {item.title} - {item.years} years
                </h3>
                <p>{item.description}</p>
                <div className="flex-container pill-container">
                  {item.set.map((_item, i) => {
                    return (
                      <div className="pill" key={i}>
                        {_item.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </article>
    );
  }
}
