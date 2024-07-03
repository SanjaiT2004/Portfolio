import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects() {
  const projectData = [
    {
      title: 'Project One',
      description: 'A brief description of Project One. This project involved developing a web application using React and Node.js. It included features such as user authentication, real-time data updates, and responsive design.',
      image: 'https://via.placeholder.com/300x200', // Placeholder image URL
      link: 'https://github.com/yourusername/project-one'
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. This project focused on creating a mobile application using React Native. It featured offline capabilities, push notifications, and seamless integration with third-party APIs.',
      image: 'https://via.placeholder.com/300x200', // Placeholder image URL
      link: 'https://github.com/yourusername/project-two'
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three. This was a data analysis project using Python and pandas. It involved cleaning and analyzing large datasets, and visualizing the results using Matplotlib and Seaborn.',
      image: 'https://via.placeholder.com/300x200', // Placeholder image URL
      link: 'https://github.com/yourusername/project-three'
    }
    // Add more projects as needed
  ];

  return (
    <Container fluid className="projects-section mt-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projectData.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
