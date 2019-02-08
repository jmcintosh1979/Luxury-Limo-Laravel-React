import React from 'react';
import "./style.css";



function VehicleCard(props){
  
    return (
 
        <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Description:</strong> {props.description}
            </li>
            <li>
              <strong>Capacity:</strong> {props.capacity}
            </li>
            <li>
              <strong>Quantity:</strong> {props.quantity}
            </li>
          </ul>
        </div>

      </div>
    )
  }




// import React from "react";
// import "./style.css";

// function FriendCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Location:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//       <span onClick={() => props.removeFriend(props.id)} className="remove">
//         𝘅
//       </span>
//     </div>
//   );
// }

export default VehicleCard;