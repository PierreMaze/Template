import about from "../assets/image/about.png";
import "../assets/styles/_aboutUs.scss";

const About = () => {
  return (
    <div
      className="main about-box"
      style={{ backgroundImage: `url(${about})` }}>
      <div className="container_picture_about">
        <img src="src\assets\image\meToken.png" alt="Me" />
      </div>
      <div className="about_us">
        <p className="about_text">
          Je me présente, Pierre MAZELAYGUE, 26 ans, je vis dans la région
          bordelaise et je suis en formation en tant que développeur web.
        </p>
        <p className="about_text">
          Je pratique React depuis quelques mois maintenant.
        </p>
        <p className="about_text">
          J&apos;ai toujours été passionné par la programmation et les
          technologies informatiques.
        </p>
      </div>
    </div>
  );
};

export default About;
