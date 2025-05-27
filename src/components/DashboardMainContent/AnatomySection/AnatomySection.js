import React from 'react';
import './AnatomySection.css';

const AnatomySection = () => {
  const patient = {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    id: 'PT-10245',
    avatar: 'https://i.pravatar.cc/100?img=12' // mock avatar
  };

  return (
    <div className="anatomy-card">
      {/* Patient Info */}
      <div className="patient-header">
        <img className="avatar" src={patient.avatar} alt="Patient Avatar" />
        <div>
          <h2>{patient.name}</h2>
          <p>{patient.gender}, {patient.age} yrs</p>
          <p className="patient-id">ID: {patient.id}</p>
        </div>
      </div>

      {/* Anatomy Model */}
      <div className="anatomy-image">
        <img
          src="/images/human-body.jpg"
          alt="Anatomy Model"
        />
      </div>
    </div>
  );
};

export default AnatomySection;
