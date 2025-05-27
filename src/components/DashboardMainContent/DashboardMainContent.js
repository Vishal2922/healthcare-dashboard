import React from 'react';
import AnatomySection from './AnatomySection/AnatomySection';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from './ActivityFeed/ActivityFeed';

import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-wrapper">
      {/* Left Column */}
      <div className="anatomy-panel">
        <AnatomySection />
      </div>

      {/* Right Column */}
      <div className="right-panel">
        {/* Top Row: Calendar and Appointments side-by-side */}
        <div className="top-row">
          <div className="content-box calendar-box">
            <CalendarView />
          </div>
          <div className="content-box schedule-box">
            <UpcomingSchedule />
          </div>
        </div>

        {/* Bottom Row: ActivityFeed full width */}
        <div className="content-box activity-box">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
