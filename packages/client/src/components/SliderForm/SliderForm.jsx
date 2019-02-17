import React from 'react';
import './SliderForm.css';
import { Col, Row, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, Container } from 'reactstrap';



class SliderForm extends React.Component {
    state = {
        value: 0
    }
    getInitialState = () => {
        return { value: 3 };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <Container>
                <Row form>
                    <Col md={4}>
                        <h4>אוריינטציה טכנולוגית</h4>
                    </Col>
                    <Col md={4}>
                        <input
                            id="typeinp"
                            type="range"
                            min="0" max="5"
                            value={this.state.value}
                            onChange={this.handleChange}
                            step="1" />
                    </Col>
                    <Col md={4}>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default SliderForm;
