import React, { useState } from "react";
import menu from "../../data/menu";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = ({ userRole }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const filteredMenu = menu
    .filter((item) => item.roles.includes(userRole))
    .map((item) => ({
      ...item,
      subMenu: item.subMenu.filter((sub) => sub.roles.includes(userRole)),
    }));
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : "open"}`}>
      <div className="sidebar-header">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
        {!collapsed && <span className="sidebar-title">Trinity</span>}
      </div>

      <ul className="sidebar-list">
        {filteredMenu.map((item, index) => (
          <li
            key={index}
            className="sidebar-item"
            onMouseEnter={() => collapsed && setActiveIndex(index)}
            onMouseLeave={() => collapsed && setActiveIndex(null)}
          >
            <button
              className="sidebar-button"
              onClick={() => handleItemClick(index)}
            >
              <span className="icon">{item.icon}</span>
              {!collapsed && <span className="label"> <Link className="sub-item" to={item.path}>{item.label}</Link></span>}
              {!collapsed && item.subMenu.length > 0 && (
                <span className="arrow">▶</span>
              )}
              
            </button>

            {item.subMenu.length > 0 && (
              <ul
                className={`submenu ${
                  activeIndex === index && (!collapsed || collapsed)
                    ? "open"
                    : ""
                }`}
              >
                {item.subMenu.map((sub, subIndex) => (
                  <li key={subIndex} className="submenu-item">
                    <Link to={sub.path}>{sub.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
