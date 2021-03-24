import React from "react";
import "./footer.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer(props) {
    return (
        <footer>
            {/* <div className=""> */}
                <div id="footerDetails" className="mobile-bottom-bar grid-x grid-padding-x grid-margin-y">
                    <div className="small-12 medium-12 large-12 column">
                    <h3>Contact Information</h3>
                    <hr />
                    </div>
                    <div id="footerYer" className="small-12 medium-6 large-6 column">
                        <h4 className="name">Yer Masog</h4>
                        <ul className="no-bullet">
                        <li><span>E-mail: yer.masog@gmail.com</span></li>
                        <li><a href="https://github.com/yermasog" target="_blank" className="footer-link">
                            <i className="fab fa-github"></i><span className="footer-text">  GitHub</span>
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/yer-masog-6470545a/" target="_blank" className="footer-link">
                            <i className="fab fa-linkedin-in"></i><span className="footer-text">  LinkedIn</span>
                        </a></li>
                        </ul>
                    </div>

                    <div id="footerYer" className="small-12 medium-6 large-6 column">
                        <h4 className="name">Maria Sargent</h4>
                        <ul className="no-bullet">
                        <li><span>E-mail: maria.sargent@thunderj.com</span></li>
                        <li><a href="https://github.com/mesgt" target="_blank" className="footer-link">
                            <i className="fab fa-github"></i><span className="footer-text">   GitHub</span>
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/maria-sargent-340a5354/" target="_blank" className="footer-link">
                            <i className="fab fa-linkedin-in"></i><span className="footer-text">  LinkedIn</span>
                        </a></li>
                        </ul>
                    </div>

                </div>
            {/* </div> */}

        </footer>
    );
}

export default Footer;