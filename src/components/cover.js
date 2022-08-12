function Cover() {
  return (
    <main id="main-sec">
      <div className="flex-container" id="main-sec-wrapper">
        <div id="main-sec-1">
          <img
            src="images/rectangle.png"
            alt="Grey colored rectangle"
            id="rectangle"
          />
          <img
            src="images/flower.svg"
            alt="Flower Image"
            id="flower-img-left-main"
          />
          <h1>SOFTWARE DEVELOPER</h1>
        </div>
        <div id="main-sec-2">
          <h2>Hi there! I’m Santhini</h2>
          <p>I help startups build amazing applications</p>
          <img
            src="images/flower.svg"
            alt="Flower Image"
            id="flower-image-right-main"
          />
          <button className="primary-button">Get in touch</button>
        </div>
      </div>
      <div id="main-description">
        <p>
          My name is Santhini Sasidharan. I’m a frontend developer with a
          full-stack background. I love to make complex things simple and joy to
          use. Currently, I focus on building single page applications with
          React and Next js. I also develop slack bot applications.
        </p>
        <p>
          Over the past 6 years, I ‘ve gained experience across most aspects of
          application lifecycle, including frontend, backend and dev-ops.
        </p>
        <p>
          This allows me to take full ownership of a project from design to
          implementation and deployment.
        </p>
      </div>
    </main>
  );
}

export default Cover;
