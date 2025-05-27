import React from "react";
import "./Sidebar.css";
import { LayoutDashboard, Calendar, Clock, MessageCircle, Activity, Settings, HelpCircle, FileText } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <LayoutDashboard /> },
  { label: "History", icon: <FileText /> },
  { label: "Calendar", icon: <Calendar /> },
  { label: "Appointments", icon: <Clock /> },
  { label: "Statistics", icon: <Activity /> },
  { label: "Tests", icon: <FileText /> },
  { label: "Chat", icon: <MessageCircle /> },
  { label: "Support", icon: <HelpCircle /> },
  { label: "Setting", icon: <Settings /> },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">General</h3>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
