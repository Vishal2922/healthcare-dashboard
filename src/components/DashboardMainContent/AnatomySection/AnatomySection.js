import React from 'react';
import './AnatomySection.css';

const AnatomySection = () => {
  const patient = {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    id: 'PT-10245',
    avatar: 'https://i.pravatar.cc/100?img=12'
  };

  const organs = [
    { icon: '🫀', name: 'Heart', status: 'Normal', color: 'green' },
    { icon: '🫁', name: 'Lungs', status: 'Needs Attention', color: 'orange' },
    { icon: '🦴', name: 'Bones', status: 'Mild Concern', color: 'yellow' }
  ];

  return (
    <div className="anatomy-card">
      {/* Patient Header */}
      <div className="patient-header">
        <img className="avatar" src={patient.avatar} alt="Patient Avatar" />
        <div>
          <h2>{patient.name}</h2>
          <p>{patient.gender}, {patient.age} yrs</p>
          <p className="patient-id">ID: {patient.id}</p>
        </div>
      </div>

      {/* Anatomy Image */}
      <div className="anatomy-image">
        <img
          src="/images/human-body.jpg"
          alt="Anatomy Model"
        />
      </div>

      {/* Organ Conditions */}
      <div className="organ-status-cards">
        {organs.map((org, index) => (
          <div className="organ-card-v2" key={index}>
            <span className="organ-icon">{org.icon}</span>
            <div className="organ-info">
              <span className="organ-name">{org.name}</span>
              <span className={`status-pill ${org.color}`}>{org.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
