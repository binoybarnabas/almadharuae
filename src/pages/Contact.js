import "../styles/contactstyles/animate.css"
import "../styles/contactstyles/bootstrap.min.css"
import "../styles/contactstyles/style.css"
import img from "../assets/contactdiv.jpg";
const Contact = () => {
    return (

        <section >
            <div className="" width="100%">
                <img src={img} height="30%" width="100%" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <div className="row mb-5">
                                <div className="col-md-6 d-flex flex-fill ">
                                    <div className="contact-wrap p-md-5 p-4">
                                        <h3 className="mb-4">Contact Us</h3>
                                        <div id="form-message-warning" className="mb-4"></div>
                                        <div id="form-message-success" className="mb-4">
                                            Your message was sent, thank you!
                                        </div>
                                        <form method="POST" id="contactForm" name="contactForm" className="contact-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="name" className="form-label">Full Name</label>
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="email" className="form-label">Email Address</label>
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label for="subject" className="form-label">Subject</label>
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label for="message" className="form-label">Message</label>
                                                        <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message" required></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 d-flex align-items-center">
                                    <div id="map">
                                        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5339387131135!2d55.43050067526133!3d25.286258977653667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ef126ea8e0b%3A0xfa3724ea810c1ac6!2sAl%20Madar%20Engineering%20LLC!5e0!3m2!1sen!2sin!4v1681650378149!5m2!1sen!2sin"} width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="dbox text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="fa fa-map-marker"></span>
                                        </div>
                                        <div className="text mt-3">
                                            <p><strong>Address:</strong> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="fa fa-phone"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="fa fa-paper-plane"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="fa fa-globe"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >

                </div >
            </div >
        </section >
    );
}

export default Contact;