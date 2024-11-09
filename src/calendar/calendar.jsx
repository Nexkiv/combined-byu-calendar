import React from 'react';
import { AuthState } from '../login/authState';
import ICalendarFeed from './ICalendarFeed';
import './calendar.css';

export function Calendar() {
  fetch('https://quote.cs260.click')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
  
  const calendarUrl = "../public/Barker.ics";

  return (
    <main>
        {/*
        <div>
            <h1>My Calendar App</h1>
            <ICalendarFeed url={calendarUrl} />
        </div>
        */}
        <div id="week-title">
            <h1>Week of September 30 to October 6, 2024</h1>
            <button type="button" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"></path>
                </svg>
            </button>
            <button type="button" className="btn btn-secondary">
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
                            <th className="weekday">Mon</th>
                            <th className="weekday">Tue</th>
                            <th className="weekday">Wed</th>
                            <th className="weekday">Thu</th>
                            <th className="weekday">Fri</th>
                            <th className="weekday">Sat</th>
                            <th className="weekday">Sun</th>
                        </tr>
                    </thead>

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
                </table>
            </div>
        </div>

        <div className="buttons">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_calendar_popup">Add Calendar</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_event_popup">Add Event</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_assignment_popup">Add Assignment</button>
        </div>

        <div className="second-sign-out-button">
            <form method="get" action='/'>
                <button className="btn btn-secondary" type="submit">Sign-out</button>
            </form>
        </div>

        {/* <!-- Add Calendar Pop-up Menu --> */}
        <div className="modal fade" id="add_calendar_popup" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
            
                {/* <!-- Pop-up content--> */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Calendar</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Calendar ID:</span>
                                <input className="form-control" type="text" placeholder="UNIV 101" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Calendar Name:</span>
                                <input className="form-control" type="text" placeholder="BYU Foundations for Student Success" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">iCal link:</span>
                                <input className="form-control" type="url" placeholder="example.ical" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Add Calendar</button>
                        </div>
                    </form>
                </div>
            
            </div>
        </div>

        {/* <!-- Add Event Pop-up Menu --> */}
        <div className="modal fade" id="add_event_popup" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
            
                {/* <!-- Pop-up content--> */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Event</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Calendar ID:</span>
                                <input className="form-control" type="text" placeholder="General" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Event Name:</span>
                                <input className="form-control" type="text" placeholder="Meeting" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Date:</span>
                                <input className="form-control" type="datetime-local"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Add to Calendar</button>
                        </div>
                    </form>
                </div>
            
            </div>
        </div>

        {/* <!-- Add Assignment Pop-up Menu --> */}
        <div className="modal fade" id="add_assignment_popup" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
            
                {/* <!-- Pop-up content--> */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Assignment</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Calendar ID:</span>
                                <input className="form-control" type="text" placeholder="CS 252" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Event Name:</span>
                                <input className="form-control" type="text" placeholder="Homework 42" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Due Date:</span>
                                <input className="form-control" type="datetime-local"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Add to Calendar</button>
                        </div>
                    </form>
                </div>
            
            </div>
        </div>
    </main>
  );
}