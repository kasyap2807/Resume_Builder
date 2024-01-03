import React from 'react';
import './About.css';
import aboutImage from '../../../images/left-image.png';
import { Link,useParams } from 'react-router-dom';

const About = () => {
    const {id} =useParams();
    return (
        <section class="section my-5" id="About">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <img src={aboutImage} class="rounded img-fluid d-block mx-auto" alt="about-image" />
                    </div>
                    <div class="right-text col-lg-6 col-md-12 col-sm-12 mobile-top-fix pl-5">
                        <div class="left-heading">
                            <h2>Take Your resume Score</h2>
                        </div>
                        <div class="left-text">
                            <p>
                               Are you likely to get Score Of Your Resume Score Lets Get Your Score By Using This Feature
							</p>
                            <button class="nav-link btn btn-primary"><Link to={`/Score/${id}`}> Get Score(Under Work)</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
