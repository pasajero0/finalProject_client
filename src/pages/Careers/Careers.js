import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Careers.scss'

const Careers = () => (
  <>
    <Header />
    <div className="container">
        <h1 className="careers__header">Careers</h1>
        <div className="careers__longLine" />
     <div className="careers">
      <div className="careers__imgBlock">
          <img className="careers__img" src={process.env.PUBLIC_URL + '/footer-images/career.jpg'} /> 
          <span>Join Our Team!</span>
      </div>
      <div className="careers__cv">
          <h2 className="careers__header_small">Director Assistant</h2>
          <p className ="careers__content">
          <span>Job description</span>Job description
            Striving
            for excellence is in our DNA.Since 1993, 
            we have been helping the world’ s leading companies imagine, design, engineer, 
            and deliver software and digital experiences that change the world.
            We are more than just specialists, we are experts.
          <span>Description</span>
            Today we are a global team of technologists and thinkers who help transform the world with the power of software, 
            enabling our customers to be competitive and disruptive in the marketplace through innovative technology solutions.
            Currently we are looking for a Recruitment Assistant for our Kharkiv office (department for work with Trainees).
          <span>Responsibilities</span> 
          <ul>
            <li>Supporting training activities(up to 20 training events a month)</li>
            <li>Dealing with internal systems for training registration and reporting</li>
            <li>Conduct interviews with new candidates</li>
          </ul>
          <span>We offer</span> 
          <ul>
            <li>Competitive compensation depending on experience and skills</li>
            <li> Social package - medical insurance, sports</li>
            <li>Compensation for sick lists and regular vacations</li>
            <li>English classes with native speakers(certified English teachers)</li>
          </ul>
          </p>
      </div> 
    </div>
    </div>
    <Footer />
  </>
);

export default Careers;