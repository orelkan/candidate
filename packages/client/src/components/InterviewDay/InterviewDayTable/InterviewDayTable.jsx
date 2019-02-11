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
            <thead className="InterviewDayTable-table-head">
                <tr>
                    <th>Hour</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>I.D</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>Report</th>
                    <th>Edit user</th>
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
