export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Hamza A.K</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
  I am a Software Engineer at MIF, providing innovative software and web-based solutions 
  to help businesses achieve their goals and drive growth.
  <br /> Let's transform your ideas into impactful digital experiences.
</p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
