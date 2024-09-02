import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">Home</div>
      <div className="sidebar-item">Trending</div>
      <div className="sidebar-item">Subscription</div>
      <div className="sidebar-item">Library</div>
      <div className="sidebar-item">History</div>
      <div className="sidebar-item">Your videos</div>
      <div className="sidebar-item">Watch later</div>
      <div className="sidebar-item">Liked videos</div>
    </div>
  );
}

export default Sidebar;