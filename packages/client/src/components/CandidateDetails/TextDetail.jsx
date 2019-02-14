import React from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, Label, Input } from 'reactstrap';

function TextDetail(props) {
    const {md=4} = props;
    return (
        <Col md={md}>
            <FormGroup>
                <Label for={props.name}>{props.label}</Label>
                <Input type="text" id={props.name} maxLength={50} {...props} />
            </FormGroup>
        </Col>
    );
}

TextDetail.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextDetail;