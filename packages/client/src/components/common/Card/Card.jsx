import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends Component {
    render() {
        const { onCardButtonClick, gender, name, children } = this.props;
        return (
            <div className="card">
                <div className="card-header-1 container">
                    <span className="card-header-icon" gender={gender}>
                        <FontAwesomeIcon icon={faUser} title={gender} />
                        <span className="card-header-title">{name}</span>
                    </span>
                </div>
                <hr className="card-divider" />
                <div className="card-body">{children}</div>
                <hr className="card-divider" />
                <div className="card-footer-1">
                    <button className="clearfix card-footer-editBtn" onClick={onCardButtonClick}>
                        <FontAwesomeIcon icon={faUserEdit} />
                    </button>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    onCardButtonClick: PropTypes.func.isRequired,
    gender: PropTypes.oneOf(['זכר', 'נקבה']),
    name: PropTypes.string.isRequired,
    children: PropTypes.Component,
};

export default Card;
