import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import RowDetails from './RowDetails/RowDetails';
import './InterviewDayTable.css';

const interviewDayTable = props => {
    let tableBody = null;
    const { interviewsArray = [] } = props;
    if (interviewsArray.length === 0) {
        tableBody = <p>No Interviews for Today</p>;
    } else {
        tableBody = interviewsArray.map(interviewDetails => {
            return <RowDetails key={'interview_table' + Math.random()} interviewDetails={interviewDetails} />;
        });
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
    interviewsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
interviewDayTable.defaultProps = {
    interviewsArray: [],
};

export default interviewDayTable;
