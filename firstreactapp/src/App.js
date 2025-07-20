import "./App.css";

import { blogData } from "./data/blog-data";

import Footer from "./Footer";
import Header from "./Header";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faResearchgate,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  let headerInfo = {
    email: "dip.akand9899@gmail.com",
    phone: "01689190142",
  };

  return (
    <div className="main">
      <Header headerInfo={headerInfo} cName="Z-Index Tech Company">
        Welcome to {""}
        <FontAwesomeIcon icon={faSearch} className="text-danger" />
      </Header>

      {/* <Header email="dip.akand9899@gmail.com" phone="01689190142" /> */}

      {/* <Container fluid>
        <Container>
          <Row>
            <Col className="col-12 text-center py-4">
              <h1>Our Courses</h1>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body className="border border-2 border-danger">
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body className="border border-2 border-dark">
                  <Card.Title>Next</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body className="border border-2 border-primary">
                  <Card.Title>Node</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body className="border border-2 border-success">
                  <Card.Title>MongoDB</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container> */}

      <Container>
        <Row>
          {blogData.map((v, i) => {
            return <ProductItems pItems={v} key={i} />;
          })}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default App;

function ProductItems({ pItems }) {
  return (
    <div className="col-lg-3 mb-4 mt-4">
      <Card>
        <Card.Body className="border border-2 border-danger">
          <Card.Title>{pItems.title}</Card.Title>
          <Card.Text>{pItems.body}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
