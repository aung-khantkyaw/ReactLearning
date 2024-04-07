export default function NavItem(props) {
  return (
    <a className="nav-item" href={props.navLink}>
      {props.navName}
    </a>
  );
}

// import React from "react";
// class NavItem extends React.Component {
//   render() {
//     return (
//       <a href={this.props.navLink} className="nav-item">
//         {this.props.navName}
//       </a>
//     );
//   }
// }
