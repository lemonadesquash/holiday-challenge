import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="content-container">
        <div className="text-header">
          <p className="content-text">The personal site of</p>
          <h1>Ruth Sitanggang!</h1>
        </div>
        <div className="d-flex justify-content-center  row mt-5 mb-3">
          <div className="button">
            <Link
              to="/about"
              className="btn btn-lg btn-outline-dark w-100"
              href="#"
            >
              About
            </Link>
          </div>
          <div className="button">
            <Link
              to="/portfolio"
              className="btn btn-lg btn-outline-dark w-100"
              href="#"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
