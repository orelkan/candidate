import { Col, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import React from 'react';

export function Detail(props) {
    const {md = 4} = props;
    return (
        <Col md={md}>
            <FormGroup>
                <Label for={props.name}>{props.label}</Label>
                {props.children}
            </FormGroup>
        </Col>
    );
}

Detail.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    md: PropTypes.number,
};

export function TextInput(props) {
    return (
        <Input type="text" maxLength={50} id={props.name} {...props} />
    );
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export function NumberInput(props) {
    return (
        <Input type="number" min={1} max={999} maxLength={50} id={props.name} {...props} />
    );
}

NumberInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};