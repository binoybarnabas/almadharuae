import "../styles/projectstyles/main.css"
import proImg from "../assets/project-dummy.jpg"



const Projects = () => {
    return (<div>
        <section id="projects" className="projects">
            <div className="container pt-4 pb-4" data-aos="fade-up">

                <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

                    <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-remodeling">Remodeling</li>
                        <li data-filter=".filter-construction">Construction</li>
                        <li data-filter=".filter-repairs">Repairs</li>
                        <li data-filter=".filter-design">Design</li>
                    </ul>

                    <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Remodeling 1</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Construction 1</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/construction-1.jpg" title="Construction 1" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Repairs 1</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/repairs-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Design 1</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/design-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Remodeling 2</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/remodeling-2.jpg" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Construction 2</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/construction-2.jpg" title="Construction 2" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Repairs 2</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/repairs-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Design 2</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/design-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Remodeling 3</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/remodeling-3.jpg" title="Remodeling 3" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Construction 3</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/construction-3.jpg" title="Construction 3" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Repairs 3</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/repairs-3.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                            <div className="portfolio-content h-100">
                                <img src={proImg} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Design 3</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="assets/img/projects/design-3.jpg" title="Repairs 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    </div>);
}

export default Projects;