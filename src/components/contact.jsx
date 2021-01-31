import React from 'react';
import imageOverlay from "../img/earth.jpeg";

class Contact extends React.Component{

    render(){
        return (
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url("+imageOverlay+")"}}> 
                <div className="overlay-mf"></div>
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="contact-mf">
                        <div id="contact" className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="title-box-2  pt-4 pt-md-0">
                                <h5 className="title-left text-center">
                                Get in Touch
                                </h5>
                            </div>
                            <div className="more-info">
                                <p className="lead text-center">
                                    Whether you want to get in touch, talk about a Job, project collaboration, or just say hi, I'd love to hear from you.<br />
                                </p>
                            </div>
                            <div className='row'>
          <div  className="col-md-12 d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:hardikchaturvedi0562@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-danger" title="hardikchaturvedi0562@gmail.com">
                  <i className="fa fa-envelope-square"></i> Email Me
                </button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/hardikchaturvedi/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-primary" title="Visit my LinkenIn">
                  <i className="fa fa-linkedin-square"></i> LinkedIn
                </button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/thehardikchaturvedi" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-dark" title="My other projects">
                  <i className="fa fa-github-square"></i> GitHub
                </button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.telegram.me/HardikChaturvedi" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-primary" title="Say hello on FB">
                  <i className="fa fa-telegram"></i> Telegram
                </button>
              </a>
            </div>
          </div>
        </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <footer>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="copyright-box">
                        <p className="copyright">{new Date().getFullYear()} &copy; Copyright <strong>Hardik Chaturvedi</strong>. All Rights Reserved</p>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
            </section>
        );
    }
}

export default Contact;