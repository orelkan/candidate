import React from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, Label } from 'reactstrap';
import Input from 'reactstrap/es/Input';

function CheckboxDetail(props) {
    let md = {};
    if (props.md) md = {md: props.md};
    return (
        <Col {...md}>
            <FormGroup>
                <Input type="checkbox" checked={props.value} {...props}/>
                <Label className="can-details-checkbox-text" for={props.name}>{props.label}</Label>
            </FormGroup>
        </Col>
    );
}

CheckboxDetail.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CheckboxDetail;