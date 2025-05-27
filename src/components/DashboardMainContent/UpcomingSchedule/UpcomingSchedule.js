import React from 'react';
import './UpcomingSchedule.css';

const appointments = [
  { time: '09:00 AM', title: 'Dental Checkup', doctor: 'Dr. Smith', icon: '🦷' },
  { time: '11:00 AM', title: 'Eye Test', doctor: 'Dr. Kapoor', icon: '👁️' },
  { time: '02:30 PM', title: 'Therapy Session', doctor: 'Dr. Allen', icon: '🧠' },
  { time: '04:00 PM', title: 'Blood Test', doctor: 'Dr. Noah', icon: '🩸' }
];

const UpcomingSchedule = () => {
  return (
    <div className="schedule-modern">
      <h2>🗓️ Upcoming Appointments</h2>
      <ul>
        {appointments.map((appt, idx) => (
          <li key={idx}>
            <span className="icon">{appt.icon}</span>
            <div className="info">
              <strong>{appt.title}</strong>
              <p>{appt.time} - {appt.doctor}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingSchedule;
