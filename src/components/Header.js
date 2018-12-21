import React, { Component } from 'react';
import '../dist/style.css';


class Header extends Component {
  render() {
    return (
      <div className="App">
        <div id="main" className="container">
          <header id="header">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="header-item bg-0">
                  <div className="line">
                    <a href="index_2.html" id="header-logo" className="site-logo">University</a>

                    <a href="index.html#" className="custom-btn colored">Apply to University</a>
                  </div>

                  <div className="line">
                    <p id="header-slogan">University of modern science</p>

                    <div className="social-btn">
                      <a className="icon-twitter-bird" href="index.html#"></a>
                      <a className="icon-linkedin-rect" href="index.html#"></a>
                      <a className="icon-facebook-rect" href="index.html#"></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-6">
                <div className="header-item bg-4">
                  <a id="menu-open" className="" href="javascript:void(0);">Open Menu<span></span></a>

                  <nav id="navigation" className="header-menu">
                    <ul>
                      <li>
                        <a href="faculties_1.html">Faculties</a>

                        <div className="dropdown">
                          <ul className="bg-7">
                            <li><a href="faculties_1.html">Faculties 1</a></li>
                            <li><a href="faculties_2.html">Faculties 2</a></li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a href="blogs.html">Blog</a>
                      </li>

                      <li>
                        <a href="courses.html">Courses</a>

                        <div className="dropdown">
                          <ul className="bg-7">
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="courses_details.html">Courses Details</a></li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a href="about.html">Pages</a>

                        <div className="dropdown">
                          <ul className="bg-7">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="index_2.html">Home 2</a></li>
                            <li><a href="login_2.html">Login 2</a></li>
                            <li><a href="typography.html">Typography</a></li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>

                  <nav id="submenu" className="header-menu bg-2">
                    <ul>
                      <li><a href="campus_locations.html">Campus and locations</a></li>
                      <li><a href="directory.html">Directory</a></li>
                      <li><a href="study_advice.html">Study advice</a></li>
                      <li><a href="login.html"><i className="icon-user"></i>Login</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
