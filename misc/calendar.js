import React from 'react'
/* import { Weekday, Date } from '../../types' */
/* import {Weekdays} from '../../../src/configs/Weekdays'
import {monthDates} from '../../../src/configs/monthDays' */
/* import { ChevronRightIcon } from '../../../src/assets/icons/ChevronRightIcon'
import { ChevronLeftIcon } from '../../../src/assets/icons/ChevronLeftIcon' */ 
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'


/* export const Calendar = () => {
    var inst = mobiscroll.eventcalendar('#demo-mobile-month-view', {
        theme: 'ios',
        themeVariant: 'light',
        clickToCreate: false,
        dragToCreate: false,
        dragToMove: false,
        dragToResize: false,
        view: {
            calendar: { type: 'month' },
            agenda: { type: 'month' }
        },
        onEventClick: function (event, inst) {
            mobiscroll.toast({
                message: event.event.title
            });
        }
    });

    mobiscroll.util.http.getJson('https://trial.mobiscroll.com/events/?vers=5', function (events) {
        inst.setEvents(events);
    }, 'jsonp');
} */


export const Calendar = () => {

    const generateDates = (date: number) => {
        for (let i = 0; i < 7; i++) {
            return <button className={`date ${date == 18 ? "today": ""}`} value={date}><p>{date}</p></button>
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
            <div className="datepicker-container">
            <ChevronLeftIcon />
            <span>June 2022</span>
            <ChevronRightIcon />
            </div>
            

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