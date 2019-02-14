import React from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, Label, Input } from 'reactstrap';

function NumberDetail(props) {
    return (
        <Col md={4}>
            <FormGroup>
                <Label for={props.name}>{props.label}</Label>
                <Input type="number" min={1} max={999} id={props.name}
                    maxLength={50} {...props} />
            </FormGroup>
        </Col>
    );
}

NumberDetail.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default NumberDetail;