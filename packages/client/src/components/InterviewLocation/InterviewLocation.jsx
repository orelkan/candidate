import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './InterviewLocation.css';

const locationToImage = {
    גלילות: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png',
};

function InterviewLocation(props) {
    return (
        <div style={{ display: 'block', margin: '5px' }}>
            <div style={{ display: 'flex' }}>
                <div className={'DetailsContainer'}>
                    <h6 className={'InterviewLocation-h6-location'}>מיקום ראיון</h6>
                    <h3>{props.location}</h3>
                </div>
                <div className="InterviewLocation-Icon-Container">
                    <FontAwesomeIcon className="InterviewLocation-location-Container" icon={faMapMarkerAlt} />
                </div>
            </div>
            <div style={{ margin: '0px' }}>
                <img src={locationToImage[props.location]} style={{ height: '150px' }} />
            </div>
        </div>
    );
}

InterviewLocation.propTypes = {
    location: PropTypes.string.isRequired,
};

export default InterviewLocation;
