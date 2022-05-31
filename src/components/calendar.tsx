import React from 'react'
import { Weekday, Date } from '../../types'
import {Weekdays} from '../configs/Weekdays'
import {monthDates} from '../configs/monthDays'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export const Calendar: React.FC<{}> = ({}) => {

    const generateDates = (date: number) => {
        for (let i = 0; i < 7; i++) {
            return <button className="date" value={date}><p>{date}</p></button>
        }
    }

    const generateWeeks = (dates: Array<Date>) => {
        let daysInWeek = 7;
        let tempArray = [];
        for (let i = 0; i < dates.length; i += daysInWeek) {
            tempArray.push(dates.slice(i, i + daysInWeek));
        }
        return tempArray;
    }
    return (
        /*make two calendars on each side of the horizontal background
        * one for the sellers and one for the buyers */
        <div className="calendar-container">
            <div className="date-picker-container"></div>
            <span>June 2022</span>

            <div className="weekdays-container">
                {Weekdays.map(day => (
                    <div className="week-day">{day}</div>
                ))}
            </div>
            <div className="calendar">
                {
                    generateWeeks(monthDates).map(week => (
                        <div className="week">{week.map(day => (generateDates(day.day)))}</div>
                    ))
                }
            </div>

        </div>

    )

    

}