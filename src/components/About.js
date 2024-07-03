import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import me from '../Images/photo.jpg'
import './Style.css'
function About() {
  return (
    <Container fluid className="about-section mt-5 text-light text-center">
      <Row>
        <Col md={6}>
          <h2>About Me</h2>
          <p>
            Hi, I'm [Your Name], a passionate and dedicated [Your Profession] with over [X] years of experience in [your field/industry]. I specialize in [list a few key skills or areas of expertise], and I thrive on creating innovative solutions that meet the needs of clients and users alike.
          </p>
          <p>
            I hold a [Your Degree] in [Your Major] from [Your University]. Over the years, I have worked on numerous projects ranging from [mention a few types of projects you've worked on, e.g., web applications, mobile apps, graphic design, data analysis]. My work is driven by a deep commitment to [mention your core values or professional motivations, e.g., user-centered design, data-driven decision-making, creative problem-solving].
          </p>
          <p>
            When I'm not working, I enjoy [mention some personal interests or hobbies, e.g., hiking, reading, traveling, playing the guitar]. I believe that a well-rounded life enhances my creativity and problem-solving skills, allowing me to bring fresh perspectives to my professional work.
          </p>
        </Col>
        <Col md={6}>
          <img src={me} alt="Your Name" className="img-fluid rounded-circle mt-5" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
