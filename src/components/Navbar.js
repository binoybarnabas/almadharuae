import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  return (
    <div>
      <section>
        <div className="wrap">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col">
                <p className="mb-0 phone">
                  <span className="fa fa-phone"></span>{" "}
                  <a href="#">+00 1234 567</a>
                </p>
              </div>
              <div className="col d-flex justify-content-end">
                <div className="social-media">
                  <p className="mb-0 d-flex">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook">
                        <i className="sr-only">Facebook</i>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter">
                        <i className="sr-only">Twitter</i>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram">
                        <i className="sr-only">Instagram</i>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-youtube">
                        <i className="sr-only">YouTube</i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-light ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Papermag <span>Magazine</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
