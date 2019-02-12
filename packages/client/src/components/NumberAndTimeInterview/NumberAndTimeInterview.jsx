import React from 'react';
import './NumberAndTimeInterview.css';
import TimeInterview from '../InterviewTime/InterviewTime'
import NumberOfCandidtaes from '../NumberOfCandidates/NumberOfCandidates'
import { faHourglassStart, faHourglassEnd } from '@fortawesome/free-solid-svg-icons';

const NumberAndTimeInterview = (props) => (
    <div className="data-grid">
        <div className="interview-number-of-candidates">
            <NumberOfCandidtaes numberOfCandidates={5} />
        </div>
        <div>
            <span className="interview-time-span"><TimeInterview time="04:00" icon={faHourglassStart} title="שעת התחלה משוערת" /></span>
            <span className="interview-time-span"><TimeInterview time="08:00" icon={faHourglassEnd} title="שעת סיום משוערת" /></span>
        </div>

    </div>
);
export default NumberAndTimeInterview;
