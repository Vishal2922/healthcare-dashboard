import React from 'react';
import './ActivityFeed.css';

const activities = [
  '📝 John uploaded a lab report.',
  '💊 New prescription added for Alice.',
  '📤 MRI scan uploaded by Dr. Lee.',
  '📁 Patient file updated.',
  '✅ Blood test results verified.'
];

const bgColors = [
  '#e3f2fd', // light blue
  '#e8f5e9', // light green
  '#f3e5f5', // light purple
  '#fff3e0', // light orange
  '#ede7f6'  // light lavender
];

const ActivityFeed = () => {
  const leftFeeds = activities.slice(0, 3);  // 👈 First 3 on left
  const rightFeeds = activities.slice(3);   // 👈 Last 2 on right

  return (
    <div className="activity-modern">
      <h2>📌 Activity Feed</h2>
      <div className="feed-grid">
        <div className="feed-column">
          {leftFeeds.map((activity, index) => (
            <div
              key={index}
              className="feed-card"
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              {activity}
            </div>
          ))}
        </div>
        <div className="feed-column">
          {rightFeeds.map((activity, index) => (
            <div
              key={index + 3}
              className="feed-card"
              style={{ backgroundColor: bgColors[(index + 3) % bgColors.length] }}
            >
              {activity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
