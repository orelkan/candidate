import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical, faEdit } from '@fortawesome/free-solid-svg-icons';
import './RowDetails.css';

const rowDetails = props => {
    const { interviewDate, firstName, lastName, ID, gender, phoneNumber } = props.interviewDetails;
    const { onAddReportClick, onEditCandidateClick } = props;
    return (
        <tr className="RowDetails-tr">
            <th>{interviewDate.toLocaleTimeString()}</th>
            <th>{firstName}</th>
            <th>{lastName}</th>
            <th>{ID}</th>
            <th>{gender}</th>
            <th>{phoneNumber}</th>
            <th>
                <span className="RowDetails-icon shadow-sm" onClick={onAddReportClick}>
                    <FontAwesomeIcon icon={faFileMedical} />
                </span>
            </th>
            <th>
                <span className="RowDetails-icon shadow-sm" onClick={onEditCandidateClick}>
                    <FontAwesomeIcon icon={faEdit} />
                </span>
            </th>
        </tr>
    );
};

rowDetails.propTypes = {
    interviewDetails: PropTypes.shape({
        interviewDate: PropTypes.instanceOf(Date).isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        ID: PropTypes.string.isRequired,
        gender: PropTypes.oneOf(['Male', 'Female']),
        phoneNumber: PropTypes.string.isRequired,
    }),
    onAddReportClick: PropTypes.func,
    onEditCandidateClick: PropTypes.func,
};

rowDetails.defaultProps = {
    interviewDetails: { gender: 'UNKNOWN' },
};

export default rowDetails;
