import location from "../assets/locationglobe.svg";
import call from "../assets/call.svg";
import mailbox from "../assets/mailbox.svg";

import "../styles/Rainbow.css";
const Footers = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >

      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#6351ce" }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="text-white me-4">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fa fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fa fa-github"></i>
          </a>
        </div>

      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">

          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold">Almadhar</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ height: "2px", width: "60px", backgroundColor: "#7c4dff" }}>
              </hr>
              <p>
                Almadhar is the best in providing electrical plumbing and
                mechanical works in UAE. we are competitive in our service and do
                the best in className with better quality and safety.
              </p>
            </div>



            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold">Services</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ height: "2px", width: "60px", backgroundColor: "#7c4dff" }}>
              </hr>
              <p>
                <a href="#!" className="text-white">Electrical works</a>
              </p>
              <p>
                <a href="#!" className="text-white">Mechanical works</a>
              </p>
              <p>
                <a href="#!" className="text-white">Plumbing Works</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ height: "2px", width: "60px", backgroundColor: "#7c4dff" }}>
              </hr>
              <p>
                <a href="#!" className="text-white">About</a>
              </p>
              <p>
                <a href="#!" className="text-white">Services</a>
              </p>
              <p>
                <a href="#!" className="text-white">Projects</a>
              </p>
              <p>
                <a href="#!" className="text-white">Contact Us</a>
              </p>
            </div>



            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ height: "2px", width: "60px", backgroundColor: "#7c4dff" }}>
              </hr>
              <p><i className="fa fa-home mr-3"></i>almadhar technical llc uae dubai</p>
              <p><i className="fa fa-envelope mr-3"></i>almadhar@info.uae</p>
              <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
            </div>

          </div>

        </div>
      </section>



      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Copyright © 2023 -
        <a className="text-white" href="#"
        > AL MADHAR TECHNICAL CONTRACTING LLC.</a
        > All rights reserved
      </div>

    </footer>
  );
};

export default Footers;
