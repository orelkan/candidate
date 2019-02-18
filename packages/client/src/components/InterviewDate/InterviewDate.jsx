import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import './InterviewDate.css';

const dateToHebrewMapping = {
    0: 'יום ראשון',
    1: 'יום שני',
    2: 'יום שלישי',
    3: 'יום רביעי',
    4: 'יום חמישי',
    5: 'יום שישי',
    6: 'יום שבת',
};

function InterviewDate(props) {
    return (
        <div style={{ display: 'flex', margin: '5px' }}>
            <div className={'InterviewDate-Icon-Container'}>
                <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div>
                <h5 className={'InterviewDate-h5-date'}>{dateToHebrewMapping[props.date.getDay()]}</h5>
                <h6>{props.date.toLocaleDateString()}</h6>
            </div>
        </div>
    );
}

InterviewDate.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default InterviewDate;
