import React from 'react';
import {Calendar} from '../src/components/calendar';


export const DatePicker: React.FC<{}> = ({}) => {
    return (
        <div className="date-picker-container">
            <div className="background-procurement">
                <div className="calendars-container">
                    <Calendar />
                </div>     
            </div>




            <div className="background-sales">
                <div className="calendars-container">
                    <Calendar />
                </div>     
            </div>
        </div>
    )
}