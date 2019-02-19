import React, { useState } from 'react';
import { Col, Row, Container, Input } from 'reactstrap';
import './SliderBottom.css'


function SliderButtom(props) {
    const [state, setState] = useState({
        value: '1',
        description: '',
    });

    function handleChange(event) {
        setState({ ...state, value: event.target.value });
    }
    return (
        <Container className="bottom-container">
            <Row className="row-bottom">
                <Col md={6}>
                    <h2 className="summary-h2">סיכום והתרשמות כללית</h2>
                </Col>
                <Col md={6}>
                    <Input placeholder="התרשמות כללית" className="description-input-summary" type="textarea"></Input>
                </Col>
            </Row>
            <Row className="row-bottom">
                <Col md={6}>
                    <h2 className="summary-h2">המלצת המראיין</h2>
                </Col >
                <Col md={6}>
                    <Input type="select" name="select" className="input-select">
                        <option value="really">ריאלי</option>
                        <option value="place">על בסיס מקום פנוי</option>
                        <option value="mismatch">חוסר התאמה</option>
                        <option value="mipuy">מיפוי</option>
                    </Input>
                </Col>
            </Row>
            <Row className="row-bottom">
                <Col md={6}>
                    <h2 className="summary-h2">סיכום מידת התאמה</h2>
                </Col>
                <Col md={6}>
                    <span className="range-title">
                        {state.value === '1' && <label>כלל לא מתאים - 1</label>}
                        {state.value === '2' && <label>2 - מתאים במידה מועטה</label>}
                        {state.value === '3' && <label>3 - מתאים במידה בינונית</label>}
                        {state.value === '4' && <label>4 - מתאים במידה טובה</label>}
                        {state.value === '5' && <label>5 - מתאים במידה רבה</label>}
                        {state.value === '6' && <label>6 - מתאים במידה רבה מאוד</label>}
                    </span>
                    <input
                        className="slider"
                        id="typeinp"
                        type="range"
                        min="1" max="6"
                        value={state.value}
                        onChange={handleChange}
                        step="1" />
                </Col>
            </Row>
        </Container>
    );
}
export default SliderButtom;