import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../common/Card';

class CandidateCard extends Component {
    render() {
        const {candidate, interview} = this.props;
        const {id, phoneNumber, gender, personalNumber} = candidate;
        const {date, time} = interview;
        const cardBody = (
            
        );
        return (
            <Card>

            </Card>
        );
    }
}