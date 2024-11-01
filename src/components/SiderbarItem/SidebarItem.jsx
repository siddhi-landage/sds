// // import React, { useState , useEffect } from "react";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faUserGraduate, faPen, faPerson, faChartLine , faClipboard } from '@fortawesome/free-solid-svg-icons'; 
// // import './SidebarItem.css';

// // const icons = {
// //   faUserGraduate,
// //   faPen,
// //   faPerson,
// //   faChartLine,
// //   faClipboard
// // };

// // const SidebarItem = ({ item }) => {
// //   const [open, setOpen] = useState(false);

// //   const renderIcon = (icon, isFontAwesome) => {
// //     if (isFontAwesome) {
// //       return <FontAwesomeIcon icon={icons[icon]} />;
// //     } else {
// //       return <i className={icon}></i>;
// //     }
// //   };

// //   if (item.childrens) {
// //     return (
// //       <div className={open ? "sidebar-item open" : "sidebar-item"}>
// //         <div className="sidebar-title">
// //           <span>
// //             {item.icon && renderIcon(item.icon, item.isFontAwesome)}
// //             {item.title}
// //           </span>
// //           <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
// //         </div>
// //         <div className="sidebar-content">
// //           {item.childrens.map((child, index) => (
// //             <SidebarItem key={index} item={child} />
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   } else {
// //     return (
// //       <a href={item.path} className="sidebar-item plain">
// //         {item.icon && renderIcon(item.icon, item.isFontAwesome)}
// //         {item.title}
// //       </a>
// //     );
// //   }
// // };

// // export default SidebarItem;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserGraduate, faPen, faPerson, faChartLine , faClipboard } from '@fortawesome/free-solid-svg-icons'; 
// import { Link } from "react-router-dom"; // Use Link for internal navigation
// import './SidebarItem.css';

// const icons = {
//   faUserGraduate,
//   faPen,
//   faPerson,
//   faChartLine,
//   faClipboard
// };

// const SidebarItem = ({ item }) => {
//   const [open, setOpen] = useState(false);

//   const renderIcon = (icon, isFontAwesome) => {
//     if (isFontAwesome) {
//       return <FontAwesomeIcon icon={icons[icon]} />;
//     } else {
//       return <i className={icon}></i>;
//     }
//   };

//   const renderLink = (path) => {
//     // If the path starts with 'http', treat it as an external link
//     if (path.startsWith('http')) {
//       return (
//         <a href={path} target="_blank" rel="noopener noreferrer" className="sidebar-item plain">
//           {item.icon && renderIcon(item.icon, item.isFontAwesome)}
//           <p>{item.title}</p>
//         </a>
//       );
//     } else {
//       // For internal links, use the `Link` component from `react-router-dom`
//       return (
//         <Link to={path} className="sidebar-item plain">
//           {item.icon && renderIcon(item.icon, item.isFontAwesome)}
//           <p>{item.title}</p>
//         </Link>
//       );
//     }
//   };

//   if (item.childrens) {
//     return (
//       <div className={open ? "sidebar-item open" : "sidebar-item"}>
//         <div className="sidebar-title">
//           <span>
//             {item.icon && renderIcon(item.icon, item.isFontAwesome)}
//             {item.title}
//           </span>
//           <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
//         </div>
//         <div className="sidebar-content">
//           {item.childrens.map((child, index) => (
//             <SidebarItem key={index} item={child} />
//           ))}
//         </div>
//       </div>
//     );
//   } else {
//     return renderLink(item.path);
//   }
// }; 

// export default SidebarItem;
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faPen, faPerson, faChartLine , faClipboard } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom"; // Use Link for internal navigation
import './SidebarItem.css';

const icons = {
  faUserGraduate,
  faPen,
  faPerson,
  faChartLine,
  faClipboard
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

  const renderLink = (path) => {
    // If the path is an external URL (starts with 'http'), treat it as an external link
    if (path.startsWith('http')) {
      return (
        <a href={path} target="_blank" rel="noopener noreferrer" className="sidebar-item plain">
          {item.icon && renderIcon(item.icon, item.isFontAwesome)}
          <p>{item.title}</p>
        </a>
      );
    } else {
      // For internal links, use the `Link` component from `react-router-dom`
      return (
        <Link to={path} className="sidebar-item plain">
          {item.icon && renderIcon(item.icon, item.isFontAwesome)}
          <p>{item.title}</p>
        </Link>
      );
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
    return renderLink(item.path);
  }
};

export default SidebarItem;
