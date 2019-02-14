import React from 'react';
import './CandidateProfile.css'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import image from '../../components/Profile/woman-profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
class CandidateProfile extends React.Component {
    render() {
        return (
            <div className="card">
                <Card>
                    <CardImg top width="100%" src={image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.fullName}</CardTitle>
                        <CardText className="sub-title">{this.props.type}</CardText>
                        <CardText>
                            <medium className="text-muted">{this.props.discription}</medium>
                        </CardText>
                        <CardText>
                            <FontAwesomeIcon className="phone-icon" size="1x" icon={faPhone} />
                            <span className="data-icon">{this.props.phoneNumber}</span>
                        </CardText>
                        <CardText>
                            <FontAwesomeIcon className="at-icon" size="1x" icon={faAt} />
                            <span className="data-icon">{this.props.email}</span>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CandidateProfile;
