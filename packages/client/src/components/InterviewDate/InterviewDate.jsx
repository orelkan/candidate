import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import './InterviewDate.css'

const DateToHebrewDay = (date) => {
    switch(date.getDay()){
        case 0:
            return 'יום ראשון';
        case 1:
            return 'יום שני';
        case 2:
            return 'יום שלישי';
        case 3:
            return 'יום רביעי';
        case 4:
            return 'יום חמישי';
        case 5:
            return 'יום שישי';
        case 6:
            return 'יום שבת';
        default:
            throw "no such day exists!"
    }
};

function interviewLocation(props){
    return (
        <div style={{display:'flex', margin: '5px'}}>
            <div className={"IconContainer"}>
                <FontAwesomeIcon icon={faCalendar}/>
            </div>
            <div>
                <h5 className={"h5_date"}>
                    {DateToHebrewDay(props.date)}
                </h5>
                <h6>
                    {props.date.toLocaleDateString()}
                </h6>
            </div>
        </div>
    )
}

interviewLocation.propTypes = {
    date: PropTypes.instanceOf(Date)
};

export default interviewLocation