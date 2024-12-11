import React, { useState } from 'react';
import { format, formatISO, addDays, isSameWeek, isSunday, nextSaturday, previousSunday, addWeeks, subWeeks, startOfWeek, endOfWeek, startOfDay, endOfDay, isSaturday, isSameMonth, isSameYear, isSameDay, isBefore, differenceInCalendarISOWeekYears, isEqual, parseISO } from "date-fns";
import { AuthState } from '../login/authState';
import { AppEvent, AppNotifier } from './appNotifier';
import './calendar.css';
import AddCalendarForm from './addCalendarForm';
import AddAssignmentForm from './addAssignmentForm';
import AddEventForm from './addEventForm';

class Calendar extends React.Component {
    state = {
        currentWeek: new Date(),
        generalCalendar: "General database",
        userCalendars: [{
            calendarData: "Previous",
            calendarName: "Previous"
        }],
        events: new String(),
        devotionalInfo: null,
        onLogout: () => { }
    };

    renderWeekTitle() {
        const fullDateFormat = "MMM d, yyyy";
        const monthFormat = "MMM d"
        const dayFormat = "d, yyyy";
        const weekStart = startOfWeek(this.state.currentWeek);
        const weekEnd = endOfWeek(weekStart);
        let formattedWeekStart;
        let formattedWeekEnd;

        if (isSameMonth(weekStart, weekEnd)) {
            formattedWeekStart = format(weekStart, monthFormat);
            formattedWeekEnd = format(weekEnd, dayFormat);
        } else if (isSameYear(weekStart, weekEnd)) {
            formattedWeekStart = format(weekStart, monthFormat);
            formattedWeekEnd = format(weekEnd, fullDateFormat);
        } else {
            formattedWeekStart = format(weekStart, fullDateFormat);
            formattedWeekEnd = format(weekEnd, fullDateFormat);
        }

        return (
            <h1>Week of {formattedWeekStart} to {formattedWeekEnd}</h1>
        )
    }

    componentDidMount() {
        AppNotifier.addHandler(this.fetchCalendarInfo);
        this.fetchDevotionalInfo();
        this.fetchCalendarInfo();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!isSameWeek(prevState.currentWeek, this.state.currentWeek)) {
            this.fetchDevotionalInfo();
            this.fetchCalendarInfo();
        }
    }

    componentWillUnmount() {
        AppNotifier.removeHandler(this.fetchCalendarInfo);
    }

    fetchDevotionalInfo = () => {
        const weekStart = startOfWeek(this.state.currentWeek);
        let devoDay = addDays(addDays(weekStart, 1), 1);
        const endpoint = `https://calendar.byu.edu/api/Events.json?categories=7&event%5Bmin%5D%5Bdate%5D=${formatISO(devoDay, { representation: 'date' })}&event%5Bmax%5D%5Bdate%5D=${formatISO(devoDay, { representation: 'date' })}`;

        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    const title = data[0].Title;
                    const startTime = data[0].StartDateTime.substring(11, 16);
                    const devotionalInfo = `${title}\nStarts at: ${startTime}`;
                    this.setState({ devotionalInfo: devotionalInfo });
                } else {
                    const devotionalInfo = `No Devotional Today`;
                    this.setState({ devotionalInfo: devotionalInfo });
                }
            })
            .catch((error) => {
                console.error('Error fetching devotional info:', error);
                this.setState({ devotionalInfo: 'Unable to load devotional information' });
            });
    }

    fetchCalendarInfo = () => {
        const endpoint = '/api/calendar';

        fetch(endpoint, {
            method: 'get'
        })
            .then((response) => response.json())
            .then((calendars) => {
                this.setState({ userCalendars: calendars })
            });
    }

    /**
     * @param {Date} weekStart
     * @param {Date} weekEnd
     * @param {any[]} rows
     */
    getGeneralCalendarInfo(weekStart, weekEnd, rows) {
        let days = [];
        let day = weekStart;
        let devoDay = addDays(addDays(weekStart, 1), 1);

        // Handling the special General Calendar
        days.push(
            <td className="cal-box">
                General
            </td>
        )

        while (isBefore(day, weekEnd) || isSameDay(day, weekEnd)) {
            // Query the database table which is passed in as a value using day to determine the assignemnts

            if (isEqual(day, devoDay)) {
                days.push(
                    <td className="cal-box">
                        Events on {format(day, "MMM")} {day.getDate()}:<br />
                        <p>{this.state.devotionalInfo || 'Loading...'}</p>
                    </td>
                );
            } else {
                days.push(
                    <td className="cal-box">
                        Events on {format(day, "MMM")} {day.getDate()}:<br />
                    </td>
                );
            }

            day = addDays(day, 1);
        }



        rows.push(
            <tr>
                {days}
            </tr>
        );
    }

    renderCalendar() {
        const weekStart = startOfWeek(this.state.currentWeek);
        const weekEnd = endOfWeek(weekStart);
        const calendars = this.state.userCalendars;

        const rows = [];

        this.getGeneralCalendarInfo(weekStart, weekEnd, rows);

        function markCompleted(value, key) {
            // This is a loose demontration of how marking assignments as complete will look
            // The actual implementation will use a database field

            let filter, table, tr, td, ul, li, i, j, k, txtValue;
            filter = value;

            table = document.getElementById("cal-body");
            if (table != null) {
                tr = table.getElementsByTagName("tr");
                for (i = 1; i < tr.length; i++) {
                    for (j = 0; j < 8; j++) {
                        td = tr[i].getElementsByTagName("td")[j];
                        ul = td.getElementsByTagName("ul")[0];
                        if (ul) {
                            li = ul.getElementsByTagName("li");
                            if (li) {
                                for (k = 0; k < li.length; k++) {
                                    txtValue = li[k].textContent || li[k].innerText;
                                    console.log(txtValue);
                                    console.log(value);
                                    if (txtValue == value && li[k].className != "completed") {
                                        li[k].className = "completed";
                                    } else if (txtValue == value) {
                                        li[k].className = "";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        const deleteCalendar = async (calendar) => {
            const endpoint = '/api/calendar';

            await fetch(endpoint, {
                method: 'delete',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(calendar),
            });

            this.fetchCalendarInfo();

            // Notify all instances of the same user that a calendar has been deleted
            AppNotifier.syncCalendars(AppEvent.RemovedCalendar, { msg: 'removed calendar' });
        }

        if (calendars.msg != null && calendars.msg == "Unauthorized") {

        } else {
            calendars.forEach(function (obj) {
                let days = [];
                let day = weekStart;

                days.push(
                    <td className="classes cal-box" onClick={() => deleteCalendar(obj)}>
                        {obj.calendarName}
                    </td>
                )

                const events = obj.calendarEvents;

                while (isBefore(day, weekEnd) || isSameDay(day, weekEnd)) {
                    // Query the database table which is passed in as a value using day to determine the assignemnts

                    let assignments = [];

                    if (events == "Error") {
                        assignments.push(<li>Invalid iCal link</li>);
                    } else if (events) {
                        for (const event of events) {
                            const dueDate = parseISO(event["DTSTART;VALUE=DATE"]);
                            if (isSameDay(day, dueDate)) {
                                const length = 40;
                                let assignment = event.SUMMARY.replace(/\\n/g, "").replace(/\\/g, "");
                                assignment = assignment.length > length ?
                                    assignment.substring(0, length) + "..." :
                                    assignment;
                                assignments.push(<li>{assignment}</li>);
                            }
                        }
                    }

                    days.push(
                        <td className="cal-box">
                            <p>Assignments due on {format(day, "MMM")} {day.getDate()}:</p>
                            <ul className="assignments">
                                {assignments}
                                {/* <li onClick={() => markCompleted(value, key)}>{value}</li> */}
                            </ul>
                        </td>
                    );
                    day = addDays(day, 1);
                }

                rows.push(
                    <tr>
                        {days}
                    </tr>
                );
            })
        }

        return <tbody id="cal-body">{rows}</tbody>;
    }

    nextWeek = () => {
        this.setState({
            currentWeek: addWeeks(this.state.currentWeek, 1)
        });
    };

    prevWeek = () => {
        this.setState({
            currentWeek: subWeeks(this.state.currentWeek, 1)
        });
    };

    thisWeek = () => {
        this.setState({
            currentWeek: new Date()
        });
    }

    addEvent = (eventName, eventDate) => {
        // This will add the event to the database
    }

    addCalendar = async (name, iCalLink) => {
        const endpoint = '/api/calendar';
        const newCalendar = { calendarName: name, calendarData: iCalLink };

        await fetch(endpoint, {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCalendar),
        });

        this.fetchCalendarInfo();

        // Notify all instances of the same user that a calendar has been added
        AppNotifier.syncCalendars(AppEvent.NewCalendar, { msg: 'new calendar' });
    }

    addAssignment = (calendarID, assignmentName, dueDate) => {
        // This will add the assignment to the database
    }

    logout = () => {
        fetch('/api/auth/logout', {
            method: 'delete'
        })
            .catch(() => {
                // Logout failed. Assuming offline
            })
    }

    render(props) {
        return (
            <main>
                <div id="week-title">
                    {this.renderWeekTitle()}
                    <button type="button" className="btn btn-secondary" onClick={this.prevWeek}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"></path>
                        </svg>
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={this.thisWeek}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-square-fill" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"></path>
                        </svg>
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={this.nextWeek}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                        </svg>
                    </button>
                </div>
                <div id="calendar-container">
                    <div className="table-responsive">
                        <table id="calendar">
                            <thead id="cal-head">
                                <tr>
                                    <th className="weekday">Classes</th>
                                    <th className="weekday">Sun</th>
                                    <th className="weekday">Mon</th>
                                    <th className="weekday">Tue</th>
                                    <th className="weekday">Wed</th>
                                    <th className="weekday">Thu</th>
                                    <th className="weekday">Fri</th>
                                    <th className="weekday">Sat</th>
                                </tr>
                            </thead>

                            {/*
                            <tbody id="cal-body">
                                <tr>
                                    <td className="classes cal-box">General</td>
                                    <td className="cal-box"></td>
                                    <td className="cal-box">
                                        <div className="general">
                                            <ul className="events">
                                                <li className="event">Devotional @ 11:00 am</li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="cal-box"></td>
                                    <td className="cal-box"></td>
                                    <td className="cal-box"></td>
                                    <td className="cal-box"></td>
                                    <td className="cal-box">
                                        <div className="general">
                                            <ul className="events">
                                                <li className="event">Church @ 9:00 am</li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="classes cal-box">CS 252<br />Introduction to Compudational Theory</td>
                                    <td className="cal-box">
                                        <div className="CS_252">
                                            <ul className="assignments">
                                                <li className="incomplete">
                                                    <span>Read 2.2 (last 8 pages)</span><span className="days_remaining">(2)</span>
                                                </li>
                                                <li className="completed">
                                                    <span>Homework 12</span><span className="days_remaining">(2)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="cal-box">
                                        <div className="CS_252">
                                            <ul className="assignments">
                                                <li className="last_day">
                                                    <span>Read 2.2 (last 8 pages)</span><span className="days_remaining">(1)</span>
                                                </li>
                                                <li className="completed">
                                                    <span>Homework 12</span><span className="days_remaining">(1)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="cal-box">
                                        <div className="CS_252">
                                            <ul className="assignments">
                                                <li className="incomplete">
                                                    <span>Homework 13</span><span className="days_remaining">(2)</span>
                                                </li>
                                                <li className="incomplete">
                                                    <span>Read 2.3 (all 5 pages)</span><span className="days_remaining">(2)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="cal-box">
                                        <div className="CS_252">
                                            <ul className="assignments">
                                                <li className="last_day">
                                                    <span>Homework 13</span><span className="days_remaining">(1)</span>
                                                </li>
                                                <li className="last_day">
                                                    <span>Read 2.3 (all 5 pages)</span><span className="days_remaining">(1)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="cal-box">
                                        <div className="CS_252">
                                            <ul className="assignments">
                                                <li className="last_day">
                                                    <span>Homework 14</span><span className="days_remaining">(1)</span>
                                                </li>
                                                <li className="last_day">
                                                    <span>Read 2.3 (all 5 pages)</span><span className="days_remaining">(1)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="cal-box"></td>
                                    <td className="cal-box"></td>
                                </tr>
                            </tbody>
                            */}
                            {this.renderCalendar()}
                        </table>
                    </div>
                </div>

                <div className="buttons">
                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_event_popup">Add Event</button> */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_calendar_popup">Add Calendar</button>
                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_assignment_popup">Add Assignment</button> */}
                </div>

                <div className="second-sign-out-button">
                    <form method="get" action='/'>
                        <button className="btn btn-secondary" type="submit" onClick={this.logout()}>Sign-out</button>
                    </form>
                </div>

                {/* <!-- Add Event Pop-up Menu --> 
                <AddEventForm onAddEvent={this.addEvent} />
                */}

                {/* <!-- Add Calendar Pop-up Menu --> */}
                <AddCalendarForm onAddCalendar={this.addCalendar} />

                {/* <!-- Add Assignment Pop-up Menu --> 
                <AddAssignmentForm onAddAssignment={this.addAssignment} />
                */}
            </main>
        );
    }
}

export default Calendar;