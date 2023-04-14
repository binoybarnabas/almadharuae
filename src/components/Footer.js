import location from "../assets/locationglobe.svg";
import call from "../assets/call.svg";
import mailbox from "../assets/mailbox.svg";

import "../styles/Rainbow.css";
const Footers = () => {
  return (
    <div className="footer">
      <div className="container text-center text-dark">
        <div className="row">
          <div className="col text-left container-sm">
            <h4 className="footer-style">almadhar</h4>
            <p className="footer-style">
              almadhar is the best in providing electrical plumbing and
              mechanical works in UAE. we are competitive in our service and do
              the best in className with better quality and safety.
            </p>
            <div className="row container-sm">
              <div className="col">
                <img src={location} className="location-img" />
              </div>
              <div className="col">
                <p className="footer-style">almadhar technical llc uae dubai</p>
              </div>
            </div>
            <div className="row container-sm">
              <div className="col">
                <img src={call} className="location-img" />
              </div>
              <div className="col">
                <p className="footer-style">+9108154236</p>
              </div>
            </div>
            <div className="row container-sm" style={{ paddingTop: "3vh" }}>
              <div className="col">
                <img src={mailbox} className="location-img" />
              </div>
              <div className="col">
                <p className="footer-style">almadhar@info.uae</p>
              </div>
            </div>
          </div>
          <div className="col container-sm">
            <h4 className="footer-style">Services</h4>
            <ul className="footer-style">
              <li>
                <p className="footer-style">Electrical works</p>
              </li>
              <li>
                <p className="footer-style">Mechanical works</p>
              </li>
              <li>
                <p className="footer-style">Plumbing Works</p>
              </li>
            </ul>
          </div>
          <div className="col container-sm">
            <h4 className="footer-style">Recent Projects</h4>
            <p className="footer-style">sdfghjkl</p>
            <p className="footer-style">sdfghjk</p>
            <p className="footer-style">sdfghjkl</p>
            <p className="footer-style">dfghjkl</p>
            <p className="footer-style">sdfghjkl</p>
            <p className="footer-style">dfghjkl</p>
            <p className="footer-style">dfghjkl</p>
          </div>
          <div className="col footer-style container-sm">
            <h4>contact us</h4>
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
