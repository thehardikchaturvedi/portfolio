import React from 'react';
import myImage from "../img/profile-pic.png";

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            about_me:[
                {id: "first-p-about",content: "Full Stack Developer well-versed in numerous programming tools and languages. Proficient in both Backend and Frontend development. Highly effective at working on any part of the development process efficiently and accurately. A hardworking professional with remarkable technical abilities in software development."},
                {id: "second-p-about", content: "Skilled in MERN (MongoDB, ExpressJs, ReactJs, NodeJs),Golang, JavaScript ,PHP (Framework-Laravel, Codeignitor), MySQL,HTML,CSS3,Saas Algorithms, Linux , Algorithms and Data Structure."},
                {id: "third-p-about", content: "Strong engineering professional with a Bachelor of Technology focused in Computer Science from Faculty Of Engineering & Technology Agra College, Agra."}
            ]
        }
    }

    render(){
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-4" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                <img src={myImage} className="img-fluid rounded b-shadow-a" alt="Hardik Chaturvedi"/>
                                                </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                About Me
                                                </h5>
                                            </div>
                                            {
                                                this.state.about_me.map((content) => {
                                                    return <p className="lead" key={content.id}>{content.content}</p>;
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;