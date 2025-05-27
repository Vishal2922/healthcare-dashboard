import React from "react";
import "./HealthStatusCards.css";

const healthCards = [
  {
    title: "Lungs",
    status: "Needs Checkup",
    date: "Last Checked: 10 May 2025",
    color: "#ef4444",
    level: 40,
  },
  {
    title: "Teeth",
    status: "Healthy",
    date: "Last Checked: 22 Apr 2025",
    color: "#22c55e",
    level: 90,
  },
  {
    title: "Bone",
    status: "Minor Issue",
    date: "Last Checked: 02 May 2025",
    color: "#f59e0b",
    level: 65,
  },
];


function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthCards.map((card, index) => (
        <div key={index} className="health-card">
          <div className="card-header">
            <span className="dot" style={{ backgroundColor: card.color }}></span>
            <h4>{card.title}</h4>
          </div>
          <p className="card-status">{card.status}</p>
          <p className="card-date">{card.date}</p>
          <div
           className="mini-bar"
           style={{
             background: `linear-gradient(to right, ${card.color} ${card.level}%, #e5e7eb ${card.level}%)`,
           }}
           title={`Health Level: ${card.level}%`}
         />

        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
