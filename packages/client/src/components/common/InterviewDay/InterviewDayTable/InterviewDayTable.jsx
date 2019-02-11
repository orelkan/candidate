import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'reactstrap';
import RowDetails from './RowDetails/RowDetails';

import './InterviewDayTable.css';

const interviewDayTable = props => {
    let tableBody = null;
    const { interviews = [] } = props;
    if (interviews.length === 0) {
        return (
            <div className="InterviewDayTable-noInterviewsDiv">
                <span className="InterviewDayTable-noInterviewsSpan display-1 lead">אין ראיונות</span>
            </div>
        );
    } else {
        tableBody = interviews.map(interviewDetails => (
            <RowDetails
                key={'interview_table' + interviewDetails.interviewDate.getTime()}
                interviewDetails={interviewDetails}
            />
        ));
    }
    return (
        <Table striped bordered size="sm" className="InterviewDayTable-table">
            <thead className="InterviewDayTable-table-head thead-dark">
                <tr>
                    <th>שעה</th>
                    <th>שם פרטי</th>
                    <th>שם משפחה</th>
                    <th>תעודת זהות</th>
                    <th>מין</th>
                    <th>מספר טלפון</th>
                    <th>הוסף דוח</th>
                    <th>ערוך משתמש</th>
                </tr>
            </thead>
            <tbody>{tableBody}</tbody>
        </Table>
    );
};

interviewDayTable.propTypes = {
    interviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
interviewDayTable.defaultProps = {
    interviews: [],
};

export default interviewDayTable;
