import React from 'react';
import './NumberOfCandidates.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClock } from '@fortawesome/free-solid-svg-icons';


const NumberOfCandidates = (props) => (
    <div className="numbers-of-candidtates">
        <div className="numbers-of-candidtates-data">
            <span className="numbers-of-candidtates-number">{props.numberOfCandidates}</span>
            <FontAwesomeIcon className="numbers-of-candidtates-icon" size="4x" icon={faUsers} />
        </div>
        <span className="numbers-of-candidtates-title">כמות מרואיינים</span>
    </div>
);

export default NumberOfCandidates;
