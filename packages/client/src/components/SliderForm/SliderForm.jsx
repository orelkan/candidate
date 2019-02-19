import React from 'react';
import SliderLine from './SliderLine/SliderLine'
import './SliderForm.css'
import SliderHeader from './SliderFormHeader/SliderFormHeader'
import SliderBottom from './SliderBottom/SliderBottom'

const SliderForm = () => (

    <div className="slider-form">
        <SliderHeader interviewerName="יואל גבע" interviewerJob="בונה ציפורניים" interviewerdate="12/05/19" />
        <SliderLine title="אוריינטציה טכנולוגית" />
        <SliderLine title="יכולות למידה וסקרנות" />
        <SliderLine title="כישורים בן אישיים" />
        <SliderLine title="יכולת הסתגלות" />
        <SliderLine title="דפוסי עבודה" />
        <SliderLine title="מוטיבציה לתפקיד" />
        <SliderBottom />
    </div>
);
export default SliderForm;
