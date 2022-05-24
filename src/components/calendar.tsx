import React from 'react'
import { Weekday, Date } from '../../types'
import {Weekdays} from '../configs/Weekdays'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export const Calendar: React.FC<{}> = ({}) => {
    return (
        /*make two calendars on each side of the horizontal background
        * one for the sellers and one for the buyers */
        <div className="calendar-container">
            <div className="datepicer-container"></div>
            <div className="weekdays-container">
                {Weekdays.map(day => (
                    <div className="week-day">{day}</div>
                ))}
            </div>
            <div className="calendar"></div>
        </div>

    )

    

}