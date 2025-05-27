import React from "react";
import "./Header.css";
import { Bell, Plus } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <div className="search-bar">
        <input type="text" placeholder="Search..." disabled />
        <Bell className="icon" />
      </div>

      <div className="header-right">
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
