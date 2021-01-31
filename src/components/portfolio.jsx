import React from 'react';

//import reminder
import reminder from "../img/portfolio/reminder1.png";
import reminder1 from "../img/portfolio/reminder2.png";
//import portfolio
import portfolio from "../img/portfolio/portfolio1.png";
import portfolio1 from "../img/portfolio/portfolio2.png";
import portfolio2 from "../img/portfolio/portfolio3.png";
//import amazon
import amazon from "../img/portfolio/amazon1.png";
import amazon1 from "../img/portfolio/amazon2.png";
import amazon2 from "../img/portfolio/amazon3.png";
import amazon3 from "../img/portfolio/amazon4.png";
//import netflix
import netflix from "../img/portfolio/netflix1.png";
import netflix1 from "../img/portfolio/netflix2.png";
import netflix2 from "../img/portfolio/netflix3.png";
import netflix3 from "../img/portfolio/netflix4.png";
import netflix4 from "../img/portfolio/netflix5.png";
import netflix5 from "../img/portfolio/netflix6.png";
import netflix6 from "../img/portfolio/netflix7.png";
//import covid
import covid from "../img/portfolio/covid1.png";
//import zoom
import zoom from "../img/portfolio/zoom1.png";
import zoom1 from "../img/portfolio/zoom2.png";
class Portfolio extends React.Component{
    render(){
        return (
          <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Portfolio
                    </h3>
                    <p className="subtitle-a">
                      Check Out My Personal NoteWorthy Projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={reminder} data-lightbox="gallery-reminder">
                      <div className="work-img">
                        <img src={reminder} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Reminder-Cli</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Golang</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <a href="">Github</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={reminder1} data-lightbox="gallery-reminder" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
              <div className="col-md-4">
                  <div className="work-box">
                    <a href={netflix} data-lightbox="gallery-netflix">
                      <div className="work-img">
                        <img src={netflix} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Netflix Clone</h2>
                            <div className="w-more">
                              <span className="w-ctegory">ReactJS ,Context API , JavaScript,Firebase,HTML5 ,CSS3</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                            <a href="https://netflixapp.vercel.app">Demo</a>
                            <a href="https://github.com/thehardikchaturvedi/netflix-clone">Github</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={netflix1} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={netflix2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={netflix3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={netflix4} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={netflix5} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={netflix6} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={amazon} data-lightbox="gallery-amazon">
                      <div className="work-img">
                        <img src={amazon} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Amazon Clone</h2>
                            <div className="w-more">
                            <span className="w-ctegory">ReactJS ,Context API ,Firebase,JavaScript,HTML5 ,CSS3</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                            <a href="https://thehardikchaturvedi.github.io/amazon-clone/">Demo</a>
                            {/* <a href="https://challenge-c69ce.firebaseapp.com/">Demo</a> */}
                            <a href="https://github.com/thehardikchaturvedi/amazon-clone">Github</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={amazon1} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={amazon2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={amazon3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={zoom1} data-lightbox="gallery-zoom">
                      <div className="work-img">
                        <img src={zoom1} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Zoom Clone</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Node.js ,PeerJs,HTML5 ,CSS3 ,Javascript</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                            <a href="https://thawing-headland-23372.herokuapp.com">Demo</a>
                            <a href="https://github.com/thehardikchaturvedi/zoom-clone">Github</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={zoom} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={covid} data-lightbox="gallery-covid">
                      <div className="work-img">
                        <img src={covid} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Covid19 Tracker</h2>
                            <div className="w-more">
                            <span className="w-ctegory">ReactJS ,JavaScript,HTML5 ,CSS3</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                                <a href="https://covid-19-tracker-1de38.web.app/">Demo</a>
                            <a href="https://github.com/thehardikchaturvedi/covid19-tracker">Github</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                                      </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={portfolio} data-lightbox="gallery-portfolio">
                      <div className="work-img">
                        <img src={portfolio} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Personal Portfolio</h2>
                            <div className="w-more">
                            <span className="w-ctegory">ReactJS ,JavaScript ,HTML5 ,CSS3</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                            <a href="https://thehardikchaturvedi.github.io/portfolio">Demo</a>
                            <a href="https://github.com/thehardikchaturvedi/portfolio">Github</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={portfolio1} data-lightbox="gallery-portfolio" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={portfolio2} data-lightbox="gallery-portfolio" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Portfolio;