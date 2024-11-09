import React, { useState, useEffect } from 'react';
import ICAL from 'ical.js';

function CalendarFeedParser({ url }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const text = await response.text();

      const jcalData = ICAL.parse(text);
      const component = new ICAL.Component(jcalData);
      const vevents = component.getAllSubcomponents('vevent');

      const parsedEvents = vevents.map(vevent => {
        const event = new ICAL.Event(vevent);
        return {
          summary: event.summary,
          startDate: event.startDate.toJSDate(),
        };
      });

      setEvents(parsedEvents);
    };

    fetchData();
  }, [url]);

  return (
    <div>
      {/* Render your events here */}
      {events.map((event, index) => (
        <div key={index}>
          <h3>{event.summary}</h3>
          <p>Due Date: {event.startDate.toString()}</p>
        </div>
      ))}
    </div>
  );
}

export default CalendarFeedParser;