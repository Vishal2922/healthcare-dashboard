import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import './ActivityFeed.css';

const uploadData = [
  { day: 'Mon', uploads: 2 },
  { day: 'Tue', uploads: 5 },
  { day: 'Wed', uploads: 3 },
  { day: 'Thu', uploads: 6 },
  { day: 'Fri', uploads: 4 },
  { day: 'Sat', uploads: 1 },
  { day: 'Sun', uploads: 2 }
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed-charts">
      <h2>📊 Activity Overview</h2>

      <div className="chart-card">
        <h4>Uploads This Week</h4>
        <ResponsiveContainer width="100%" height={80}>
          <BarChart data={uploadData}>
            <XAxis dataKey="day" />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="uploads" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityFeed;
