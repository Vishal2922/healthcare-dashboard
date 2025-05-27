import React from 'react';
import './CalendarView.css';

const CalendarView = () => {
  const today = new Date().getDate();

  return (
    <div className="calendar-modern">
      <h2>📅 Calendar</h2>
      <div className="calendar-grid">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className={`calendar-cell ${i + 1 === today ? 'highlight' : ''}`}
          >
            {i + 1}
            {(i + 1 === 10 || i + 1 === 22) && <span className="dot" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
