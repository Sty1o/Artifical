import React, { Component } from 'react';
import '../dist/style.css';

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <footer id="footer">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="footer-item P30 bg-4">
              <a href="index.html" id="footer-logo" className="site-logo">University</a>

              <p id="footer-slogan">N°1 american University of<br />modern science</p>

              <div className="social-btn el-bottom">
                <a className="icon-twitter-bird" href="index.html#"></a>
                <a className="icon-linkedin-rect" href="index.html#"></a>
                <a className="icon-facebook-rect" href="index.html#"></a>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2">
            <div className="footer-item P30 bg-4">
              <h5><small>Get in Touch</small></h5>

              <p>Rockefeller Center, 45 Rockefeller Plaza, New York, NY, USA</p>

              <p className="el-bottom">
                P:+1 123 444 5678<br />
                E: <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2">
            <div className="footer-item P30 bg-2">
              <h5><small>Our Twitter</small></h5>

              <p>Elegant tailored work society into ornamental opera diplomatatic</p>

              <p className="el-bottom"><a href="index.html#">Follow Us</a></p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="footer-item footer-item_subscribe P30 bg-1">
              <h5><small>Newsletter Subscription</small></h5>

              <form id="footer-form" action="index.html#">
                <p>Please subscribe to our University newsletters</p>

                <input type="text" />

                <button type="submit"><i className="arrow"></i></button>
              </form>

              <p className="el-bottom">&copy; 2013 University Site Name.All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
