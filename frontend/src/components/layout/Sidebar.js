import React from 'react';
import { FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <ul className="tabs">
        <li className="tab">
          <FaHome className="icon" /> Home
        </li>
        <li className="tab">
          <FaHome className="icon" /> About
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
