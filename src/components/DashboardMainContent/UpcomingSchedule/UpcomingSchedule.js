import React from 'react';
import './UpcomingSchedule.css';
import appointments from './mockAppointments';


const UpcomingSchedule = () => {
  return (
    <div className="schedule-modern">
      <h2>📅 Upcoming Appointments</h2>
      <ul>
        {appointments.map((appt, index) => (
          <li key={index}>
            <span className="icon">{appt.icon}</span>
            <div className="info">
              <strong>{appt.title}</strong>
              <p>{appt.time} – {appt.doctor}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingSchedule;
