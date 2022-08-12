import React from "react";
import axios from "axios";
export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const { data } = await axios.get(
      "https://portfolio-ssj.herokuapp.com/api/projects"
    );

    console.log(data);
    this.setState({ data });
  }
  render() {
    return (
      <React.Fragment>
        <section id="github-section" className="flex-container">
          <aside>
            <img
              src="images/flower.svg"
              alt="Flower Image"
              id="github-flower-left"
            />
            <a href="https://github.com/santhinisj">
              See other projects on github
            </a>
            <img
              src="images/flower.svg"
              alt="Flower Image"
              id="github-flower-right"
            />
          </aside>
        </section>
        <section id="get-in-touch-section">
          <img
            src="images/getInTouch.png"
            width="600px"
            alt="Get in touch with me via email or completing a form"
          />
          <form action="#" className="flex-container" id="contact-form">
            <h2>Get In Touch</h2>
            <pre>
              Have a project for me! Mail me at santhi.code@gmail.com or fill
              the form below!
            </pre>
            <div className="flex-container" id="form-elements">
              <input type="text" name="name" id="" placeholder="Your Name" />
              <input type="text" name="email" id="" placeholder="Your Email" />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="primary-button">
                Send Message
              </button>
            </div>
          </form>
        </section>
        <section class="feature-section">
          <h2 class="primary-heading">Featured Projects</h2>
          <div class="grid-container">
            {this.state.data.map((item, i) => {
              return (
                <div class="grid-item">
                  <div id="featured-item-details">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="600px"
                      height="300px"
                    />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.lang}</p>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
