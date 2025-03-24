import "./Footer.css"
const Footer = () => {
  return (
    <div style={{ width: '100%'}}>
      <footer className="text-center text-lg-start text-white footer">
        {/* Social media section */}
        <section className="d-flex justify-content-between p-4 social-section">
          <div className="me-5">
            <span>Connect with us on social media:</span>
          </div>
          <div>
            <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-github"></i></a>
          </div>
        </section>

        {/* Main footer content */}
        <section>
          <div className="container-fluid text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Hospital info */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Life Line Hospital</h6>
                <hr className="mb-4 mt-0 mx-auto hr-style" />
                <p style={{color:"white"}}>Providing quality healthcare services with the latest medical technology and expert professionals.</p>
              </div>

              {/* Services */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Services</h6>
                <hr className="mb-4 mt-0 mx-auto hr-style" />
                <p><a href="#!" className="text-white">Emergency Care</a></p>
                <p><a href="#!" className="text-white">Diagnostics</a></p>
                <p><a href="#!" className="text-white">Surgeries</a></p>
                <p><a href="#!" className="text-white">Pharmacy</a></p>
              </div>

              {/* Useful links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful Links</h6>
                <hr className="mb-4 mt-0 mx-auto hr-style" />
                <p><a href="#!" className="text-white">Your Account</a></p>
                <p><a href="#!" className="text-white">Appointments</a></p>
                <p><a href="#!" className="text-white">Insurance Info</a></p>
                <p><a href="#!" className="text-white">Help & Support</a></p>
              </div>

              {/* Contact & Contributors */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 mx-auto hr-style" />
                <p style={{color:"white"}}><i className="fas fa-map-marker-alt mr-3"></i> Pune, Maharashtra, India</p>
                <p style={{color:"white"}}><i className="fas fa-envelope mr-3"></i> support@lifelinehospital.com</p>
                <p style={{color:"white"}}><i className="fas fa-phone mr-3"></i> +91 98765 43210</p>
                <p style={{color:"white"}}><i className="fas fa-clock mr-3"></i> Open 24/7</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contributors */}
        <div className="text-center p-3 contributors-section" >
          <p style={{color:"grey"}}>Contributors: Venkatesh Madanwale | Sonali Mane | Saumya Turaskar</p>
          <p style={{color:"grey"}}>&copy; 2025 Life Line Hospital. All rights reserved.</p>
        </div>
      </footer>
      
    
    </div>
  );
};

export default Footer;
