import React from 'react';
import './SliderFormHeader.css';
import { Col, Row, Container } from 'reactstrap';

const SliderFormHeader = ({ interviewerdate, interviewerName, interviewerJob }) => (
    <Container className="data-header">
        <Row className="data-row">
            <Col xs="auto" >
                <span className="interview-data">
                    <h2>שם מראיין: </h2>
                    <h2 className="interview-data-h2">{interviewerName}</h2>
                </span>
            </Col>
            <Col xs="auto" >
                <span className="interview-data">
                    <h2>תפקיד: </h2>
                    <h2 className="interview-data-h2">{interviewerJob}</h2>
                </span>
            </Col>
            <Col xs="auto" >
                <span className="interview-data">
                    <h2>תאריך ראיון: </h2>
                    <h2 className="interview-data-h2">{interviewerdate}</h2>
                </span>
            </Col>
        </Row>
    </Container >
);

export default SliderFormHeader;
