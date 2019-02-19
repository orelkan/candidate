import React, { useState } from 'react';
import './SliderLine.css';
import { Col, Row, Container, Input } from 'reactstrap';

function SliderLine(props) {
    const [state, setState] = useState({
        value: '1',
        description: '',
    });

    function handleChange(event) {
        setState({ ...state, value: event.target.value });
    }
    return (
        <Container className="range-container" >
            <Row form>
                <Col className="slider-title-col" md={3}>
                    <h4 className="slider-title">{props.title}</h4>
                </Col>
                <Col md={3}>
                    <div className="range-container">
                        <span className="range-title">
                            {state.value === '1' && <label>כלל לא - 1</label>}
                            {state.value === '2' && <label>2 - במידה מועטה</label>}
                            {state.value === '3' && <label>3 - במידה בינונית</label>}
                            {state.value === '4' && <label>4 - במידה טובה</label>}
                            {state.value === '5' && <label>5 - במידה רבה</label>}
                            {state.value === '6' && <label>6 - מתאים במידה רבה מאוד</label>}
                        </span>
                        <span className="range-line">
                            <input
                                className="slider"
                                id="typeinp"
                                type="range"
                                min="1" max="6"
                                value={state.value}
                                onChange={handleChange}
                                step="1" />
                        </span>
                    </div>
                </Col>
                <Col md={5} className="discription">
                    <Input placeholder="הוסף הערות" className="description-input" type="textarea"></Input>
                </Col>
            </Row>
        </Container >
    );
}


export default SliderLine;
