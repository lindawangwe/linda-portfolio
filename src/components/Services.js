import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () => {

  return (
    <section className="services" id="services">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Services</h2>
                <p>Here are some of the services I offer:</p>
                <Tab.Container id="services-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Testing and Version Control</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Col>
                       <ul>
                        <li>Creating visually appealing and responsive websites.</li>
                        <li>Building interactive web applications that run in the browser.</li>
                        <li>Responsive Design: Ensuring that websites and applications are optimized for various devices and screen sizes.</li>
                        <li>Cross-Browser Compatibility and consistency among different web browsers.</li>
                        <li>Providing ongoing maintenance and support for existing websites and applications.</li>
                        <li>Implementing animations and interactive elements to enhance the user experience.</li>

                       </ul>
                      </Col>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Col>
                        <ul>
                          <li>Collaboration with UI/UX designers.</li>
                          <li>Transforming wire-frames and mockups into fully functional front-end code.</li>
                          <li>Creating positive and intuitive user experience through well-designed interfaces and interactions.</li>
                        </ul>
                      </Col> 
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Col>
                        <ul>
                         <li>Writing and running tests to identify and fix bugs and ensure the front-end behaves as intended.</li>
                         <li>Using version control systems like Git to manage and track changes to front-end code.</li>
                         <li>Using tools like Webpack, Gulp, or Parcel to bundle and optimize front-end assets for production</li>
                         <li>Developing web applications that offer an app-like experience, including offline capabilities and push notifications.</li>
                         <li>Integrating front-end code with back-end APIs to fetch and display data from servers.</li>
                        </ul>
                      </Col>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  )
}
