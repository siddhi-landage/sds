// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserGraduate, faPen, faPerson, faChartLine } from '@fortawesome/free-solid-svg-icons'; // Corrected faChartLine import
// import './SidebarItem.css';

// // Map of icons
// const icons = {
//   faUserGraduate,
//   faPen,
//   faPerson,
//   faChartLine // Corrected the icon name here
// };

// const SidebarItem = ({ item }) => {
//   const [open, setOpen] = useState(false);

//   // Function to render FontAwesome or default icons
//   const renderIcon = (icon, isFontAwesome) => {
//     if (isFontAwesome) {
//       return <FontAwesomeIcon icon={icons[icon]} />; // Use icons from the map
//     } else {
//       return <i className={icon}></i>; // For non-FontAwesome icons
//     }
//   };

//   if (item.childrens) {
//     return (
//       <div className={open ? "sidebar-item open" : "sidebar-item"}>
//         <div className="sidebar-title">
//           <span>
//             {item.icon && renderIcon(item.icon, item.isFontAwesome)} {/* Render icon */}
//             {item.title}
//           </span>
//           <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
//         </div>
//         <div className="sidebar-content">
//           {item.childrens.map((child, index) => (
//             <SidebarItem key={index} item={child} /> // Recursively render child items
//           ))}
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <a href={item.path || "#"} className="sidebar-item plain">
//         {item.icon && renderIcon(item.icon, item.isFontAwesome)} {/* Render icon */}
//         {item.title}
//       </a>
//     );
//   }
// };

// export default SidebarItem;
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faPen, faPerson, faChartLine } from '@fortawesome/free-solid-svg-icons'; 
import './SidebarItem.css';

const icons = {
  faUserGraduate,
  faPen,
  faPerson,
  faChartLine
};

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const renderIcon = (icon, isFontAwesome) => {
    if (isFontAwesome) {
      return <FontAwesomeIcon icon={icons[icon]} />;
    } else {
      return <i className={icon}></i>;
    }
  };

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {item.icon && renderIcon(item.icon, item.isFontAwesome)}
            {item.title}
          </span>
          <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon && renderIcon(item.icon, item.isFontAwesome)}
        {item.title}
      </a>
    );
  }
};

export default SidebarItem;
