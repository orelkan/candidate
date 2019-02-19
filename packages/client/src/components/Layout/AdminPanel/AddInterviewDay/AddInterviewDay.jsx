import React, { useState } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Select from 'react-select'
import './AddInterviewDay.css';
import 'react-day-picker/lib/style.css';
import { blue } from 'ansi-colors';


function AddInterviewDay(props) {

    const MONTHS = [
        'ינואר',
        'פבואר',
        'מרץ',
        'אפריל',
        'מאי',
        'יוני',
        'יולי',
        'אוגוסט',
        'ספטמבר',
        'אוקטובר',
        'נובמבר',
        'דצמבר',
      ];
    const WEEKDAYS_LONG = [
        'ראשון',
        'שני',
        'שלישי',
        'רביעי',
        'חמישי',
        'שישי',
        'שבת',
      ];
    const WEEKDAYS_SHORT = ['ראש', 'שני', 'שלי', 'רבי', 'חמי', 'שיש', 'שבת'];

    const modifiers = {
        disabled: disabledDays
    } 
    const modifiersStyles = {
        disabled: {
            color: 'white',
            backgroundColor: '#ffc107',
            borderRadius: '2px'
        }
    }
    const locations = [
        { value: 'ramot', label: 'מתקן רמות'},
        { value: 'glilot', label: 'גלילות'},
        { value: 'lincolen', label: 'לינקולן'},
        { value: 'tel-hashomer', label: 'תל השומר'},
    ]

    const disabledDays = props.disableDates;    // new Date(2019, 3, 3);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    // { value: 'chocolate', label: 'Chocolate' };

    return (
        <div style={{direction: 'rtl', textAlign: 'right'}}>
            <Container className="add-interview-day-container">
                <Row>
                    <Col><h1>הוסף יום ראיונות</h1></Col>
                </Row>
                <Row>
                    <Col><h4>בחר תאריך</h4></Col>
                    <Col><h4>מיקום</h4></Col>
                    <Col><h4>מראיין 1</h4></Col>
                    <Col><h4>מראיין 2</h4></Col>
                </Row>
                <Row>
                    <Col>
                        <DayPickerInput
                            locale="he"
                            placeholder={new Date().getFullYear() + "-" +  new Date().getDay() + "-" + new Date().getDate()}
                            dayPickerProps={{
                                todayButton: 'היום',
                                months: MONTHS,
                                weekdaysLong: WEEKDAYS_LONG,
                                weekdaysShort: WEEKDAYS_SHORT,
                                modifiers: modifiers,
                                modifiersStyles: modifiersStyles,
                                showOutsideDays: true,
                            }}
                            inputProps={{
                                readOnly: true,
                            }}
                        />
                    </Col>
                    <Col><Select placeholder="מיקום הראיון..." options={locations}/></Col>
                    <Col><Select placeholder="מראיין 1..." isClearable={true} options={options} /></Col>
                    <Col><Select placeholder="מראיין 2..." isClearable={true} options={options} /></Col>
                </Row>
                <Row>
                    <Col>
                        <Container style={{border: '1px solid #ced4da', borderRadius: '4px', marginTop: '40px'}}>
                            <Row style={{backgroundColor: '#cbffc1', borderRadius: '3px 3px 0 0', borderBottom: '1px solid #ced4da'}}>
                                <Col><h4>יום ראשון</h4></Col>
                                <Col style={{float: 'left', textAlign: 'left'}}><h4>מתקן רמות</h4></Col>
                            </Row>
                            <Row>
                                <Col>אוראל הגבר</Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddInterviewDay;