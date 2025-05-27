import React from "react";
import "./Header.css";
import { Bell, Plus } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="logo">Healthcare.</div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." disabled />
      </div>

      <div className="header-right">
        <Bell className="icon" />
        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User"
            className="avatar"
          />
          <span className="user-name">Dr. PRINCE</span>
        </div>
        <button className="add-btn">
          <Plus size={18} />
        </button>
      </div>
    </header>
  );
}

export default Header;
