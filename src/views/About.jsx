import ComponentNavbar from "../components/Navbar";

function About() {
  return (
    <>
      <ComponentNavbar />
      <div className="content-container">
        <div>
          <h1>About Me</h1>
          <p className="content-text mt-5">
          Hello! My name is Ruth Sitanggang, from Indonesia, have always been fascinated with computer technology since 13 years old. My interest in programming started when I playing so many games. I love game!
          </p>
          <p className="content-text">
          Currently developing my skill in programming, especially JavaScript! ^o^. I found enjoyment in process of learning and solving problems. My goal is to be a full-stack-developer and create a fully functional fun and useful app one day!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
