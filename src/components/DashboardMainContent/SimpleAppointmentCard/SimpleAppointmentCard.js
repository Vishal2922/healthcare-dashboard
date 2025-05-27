import React from "react";
import "./SimpleAppointmentCard.css";

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="simple-card">
      <div className="icon">{icon}</div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
