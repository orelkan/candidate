import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Row, Form, Container } from 'reactstrap';
import TextDetail from './TextDetail';
import './CandidateDetails.css';
import NumberDetail from './NumberDetail';
import { Detail } from './Inputs';
import Input from 'reactstrap/es/Input';
import CheckboxDetail from './CheckboxDetail';
import DetailsHeader from './DetailsHeader';

function initDefaultDetails(details) {
    const defaultFalse = ['is_beavered_son', 'is_only_child', 'israeli_citizenship',
        'additional_citizenship', 'does_study_orthodox_school'];
    defaultFalse.forEach(key => {
        if(!details[key]) {
            details[key] = false;
        }
    });
    if (!details.gender) details.gender = 'male';
    if (!details.medical_profile) details.medical_profile = 97;
}

function CandidateDetails(props) {
    let { details = {} } = props;
    initDefaultDetails(details);
    const [formState, setFormState] = useState(details);
    const [editMode, setEditMode] = useState(!!props.initialEdit); //bool

    function handleEditClick() {
        setEditMode(true);
    }

    function handleCancelClick() {
        setEditMode(false);
        setFormState(details);
    }

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setFormState({...formState, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!editMode) return;
        if (aliyahDisabled) delete formState.aliyah_date;
        props.onSubmit(formState);
        setEditMode(false);
    }

    const aliyahDisabled = (formState.birth_state === 'ישראל');

    return (
        <Container className="can-details-root">
            <Form onSubmit={handleSubmit}>
                <DetailsHeader className="can-details-header"
                    editMode={editMode} onSubmitClick={handleSubmit}
                    onEditClick={handleEditClick} onCancelClick={handleCancelClick}/>
                <Row>
                    <TextDetail name="first_name" label="שם פרטי" placeholder="ישראל"
                        disabled={!editMode} value={formState.first_name} onChange={handleInputChange}/>
                    <TextDetail name="last_name" label="שם משפחה" placeholder="ישראלי"
                        disabled={!editMode} value={formState.last_name} onChange={handleInputChange}/>
                    <Detail name="id" label="תעודת זהות" md={2}>
                        <Input type="text" placeholder="123456789" name="id" maxLength={9}
                            disabled={!editMode} value={formState.id} onChange={handleInputChange}/>
                    </Detail>
                    <Detail name="gender" label="מין" md="2">
                        <Input type="select" name="gender" id="gender" disabled={!editMode}
                            value={formState.gender} onChange={handleInputChange}>
                            <option value="male">זכר</option>
                            <option value="female">נקבה</option>
                        </Input>
                    </Detail>
                </Row>
                <Row>
                    <Detail name="birth_date" label="תאריך לידה">
                        <Input type="date" name="birth_date" disabled={!editMode}
                            value={formState.birth_date} onChange={handleInputChange}/>
                    </Detail>
                    <TextDetail name="birth_state" label="ארץ לידה" placeholder="ישראל"
                        disabled={!editMode} value={formState.birth_state} onChange={handleInputChange}/>
                    <Detail name="aliyah_date" label="תאריך עלייה">
                        <Input type="date" name="aliyah_date" disabled={!editMode || aliyahDisabled}
                            value={formState.aliyah_date} onChange={handleInputChange}/>
                    </Detail>
                </Row>
                <Row>
                    <TextDetail name="street" label="רחוב" placeholder="הרצל" disabled={!editMode}
                        value={formState.street} onChange={handleInputChange}/>
                    <NumberDetail name="house_number" label="מספר בית" placeholder="1"
                        disabled={!editMode} value={formState.house_number} onChange={handleInputChange}/>
                    <TextDetail name="city" label="ישוב" placeholder="תל אביב" disabled={!editMode}
                        value={formState.city} onChange={handleInputChange}/>
                </Row>
                <Row>
                    <Detail name={formState.phone_number} label="מספר טלפון" md={4}>
                        <Input type="text" placeholder="0540000000" name="phone_number" maxLength={10}
                            disabled={!editMode} value={formState.phone_number} onChange={handleInputChange}/>
                    </Detail>
                    <Detail name="medical_profile" label="פרופיל" md="4">
                        <Input type="select" name="medical_profile" id="medical_profile"
                            disabled={!editMode} value={formState.medical_profile} onChange={handleInputChange}>
                            <option value={97}>97 - בריא לחלוטין</option>
                            <option value={82}>82 - עם מגבלה קלה</option>
                            <option value={72}>72 - עם מגבלה בינונית</option>
                            <option value={64}>64 - כשיר לתומכי לחימה</option>
                            <option value={45}>45 - ללא לחימה או אחזקה</option>
                            <option value={25}>25 - מתנדבים רפואיים</option>
                            <option value={24}>24 - בלתי כשיר באופן זמני</option>
                            <option value={21}>21 - בלתי כשיר לחלוטין</option>
                        </Input>
                    </Detail>
                </Row>
                <Row>
                    <CheckboxDetail name="is_beavered_son" label="בן שכול" disabled={!editMode}
                        value={formState.is_beavered_son} onChange={handleInputChange}/>
                    <CheckboxDetail name="is_only_child" label="בן יחיד" disabled={!editMode}
                        value={formState.is_only_child} onChange={handleInputChange}/>
                    <CheckboxDetail name="israeli_citizenship" label="אזרחות ישראלית" md={3} disabled={!editMode}
                        value={formState.israeli_citizenship} onChange={handleInputChange}/>
                    <CheckboxDetail name="additional_citizenship" label="אזרחות זרה" disabled={!editMode}
                        value={formState.additional_citizenship} onChange={handleInputChange}/>
                    <CheckboxDetail name="does_study_orthodox_school" label='ביה"ס דתי' disabled={!editMode}
                        value={formState.does_study_orthodox_school} onChange={handleInputChange}/>
                </Row>
            </Form>
        </Container>);
}

CandidateDetails.propTypes = {
    details: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialEdit: PropTypes.func,
};

export default CandidateDetails;