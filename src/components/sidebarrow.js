import React from "react";
function SidebarRow({ selected, title, Icon }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebar__icon" />
      <h2 className="sidebar__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
