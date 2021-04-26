import React, { Component } from "react";
import "./App.css";
import ValidationForm from "./components/ValidationForm";
import { Row, Col, Container } from "reactstrap";

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <Container class="p-3">
        <Row className="justify-content-center">
          <Col xs="6">
            <div className="card-box text-center">
              <h1 style={{ backgroundColor: "MediumAquaMarine" }} class="mb-0">
                Form-Validation!
              </h1>
              {/* <h1 style={{ color: "green" }}>Form-Validation</h1> */}
              <h5 style={{ backgroundColor: "YellowGreen" }} class="mb-0">
                Get started with us today!
              </h5>
              <ValidationForm />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
