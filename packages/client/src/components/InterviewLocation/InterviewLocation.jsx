import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import './interviewLocation.css'

function interviewLocation(props){
    return (
        <div style={{display:'block', margin: '5px'}}>
            <div style={{display:'flex'}}>
                <div className={"DetailsContainer"}>
                    <h6 className={"h6_location"}>
                        מיקום ראיון
                    </h6>
                    <h3>
                        {props.location}
                    </h3>
                </div>
                <div className="IconContainer">
                    <FontAwesomeIcon className="locationIcon" icon={faMapMarkerAlt}/>
                </div>
            </div>
            <div>
                <img src={props.imgSrc}
                     style={{height: '150px'}}/>
            </div>
        </div>
    )
}

interviewLocation.propTypes = {
    location: PropTypes.string
};

export default interviewLocation