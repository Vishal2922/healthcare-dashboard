import React, { useState } from 'react';
import './CalendarView.css';
import appointments from './mockAppointments';


const getWeekDays = (offset = 0) => {
  const today = new Date();
  const start = new Date(today.setDate(today.getDate() - today.getDay() + offset * 7));
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return {
      label: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate(),
      fullDate: d.toDateString(),
      isToday: d.toDateString() === new Date().toDateString()
    };
  });
};

// Mock appointments for demo
const mockAppointments = {
  'Mon': ['Dental @ 9am', 'Therapy @ 3pm'],
  'Tue': ['Eye Check @ 11am'],
  'Wed': ['Blood Test @ 10am'],
  'Fri': ['Vaccination @ 1pm'],
};

const CalendarView = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const days = getWeekDays(weekOffset);

  return (
    <div className="weekly-calendar">
      <div className="calendar-header">
        <h3>Weekly Calendar</h3>
        <div className="nav-buttons">
          <button onClick={() => setWeekOffset(weekOffset - 1)}>⬅</button>
          <button onClick={() => setWeekOffset(weekOffset + 1)}>➡</button>
        </div>
      </div>
      <div className="calendar-days">
        {days.map((day, idx) => {
          const events = appointments
          .filter(a => a.day === day.label)
          .map(a => `${a.title} @ ${a.time}`);
          return (
            <div
              key={idx}
              className={`calendar-day ${day.isToday ? 'today' : ''}`}
            >
              <span className="day-label">{day.label}</span>
              <span className="day-number">{day.date}</span>
              <ul className="day-events">
                {events.map((event, i) => (
                  <li key={i}>{event}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="today-appointments">
        <h4>📅 Today's Appointments</h4>
        <ul>
          {appointments
          .filter(appt => appt.day === new Date().toLocaleDateString('en-US', { weekday: 'short' }))
          .map((appt, idx) => (
            <li key={idx}>
              <span className="icon">{appt.icon}</span>
              <strong>{appt.title}</strong> – {appt.time} – {appt.doctor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarView;

