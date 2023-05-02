import ComponentNavbar from "../components/Navbar";
import Card from "react-bootstrap/Card";

import iprojectImg from '../assets/iproject.png'

function Portfolio() {
  return (
    <>
      <ComponentNavbar />
      <div className="content-container">
        <div>
          <h1>My Project</h1>
        </div>
        <div className="content-card mt-5">
          <Card>
            <Card.Img variant="top" src={iprojectImg} />
            <Card.Body>
              <Card.Title>My Astronomy</Card.Title>
              <Card.Text>
                A place for you to find the latest news about Astronomy all around the world!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
