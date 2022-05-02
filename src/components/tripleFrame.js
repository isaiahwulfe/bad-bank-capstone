import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TripleFrame = (props) => {
    return(
      <Container fluid="lg">
        <Row className="justify-content-lg-center">
          <Col lg="3">
            <img src={"./images/bitcoin.png"} className="wingImg" />
          </Col>
          <Col lg="6">
            <div className='presenting'>
              {props.center}
            </div>
          </Col>
          <Col lg="3">
            <img src={"./images/bitcoin.png"} className="wingImg" />
          </Col>
        </Row>
      </Container>
    )
  }

export default TripleFrame;