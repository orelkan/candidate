import React from 'react';
import PropTypes from 'prop-types';
import Row from 'reactstrap/es/Row';
import { Button, Col } from 'reactstrap';

function DetailsHeader(props) {
    const {className, editMode, onEditClick, onCancelClick, onSubmitClick} = props;
    return (
        <div className={className}>
            <Row>
                <Col md={4}>
                    <h1>פרטים</h1>
                </Col>
                <Col md={editMode ? 4 : 6}/>
                {!editMode ?
                    <Col md={2} className="can-header-btn">
                        <Button className="can-full-width" onClick={onEditClick}>ערוך</Button>
                    </Col> :
                    [
                        <Col md={2} className="can-header-btn" key="submit">
                            <Button className="can-full-width" onClick={onSubmitClick}
                                type="submit" color="success">שמור</Button>
                        </Col>,
                        <Col md={2} className="can-header-btn" key="cancel">
                            <Button className="can-full-width" onClick={onCancelClick}
                                color="danger">בטל</Button>
                        </Col>
                    ]
                }
            </Row>
        </div>
    );
}

DetailsHeader.propTypes = {
    editMode: PropTypes.bool.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onSubmitClick: PropTypes.func.isRequired,
};

export default DetailsHeader;