import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import "./UserList.css";

const UserList = props => {
  //console.log(props);
  const {
    img,
    name,
    email,
    age,
    phoneNumber,
    yearlyIncome,
    company
  } = props.user;
  return (
    <div className="user-list">
      <div>
        <img src={img} alt="" height="200" width="200" />
      </div>
      <div className="user-name">
        <h4> {name} </h4>
        <p>
          <small>Email: {email} </small>
        </p>
        <p>Age: {age}</p>
        <p>Phone Number: {phoneNumber} </p>
        <p>Yearly Income: ${yearlyIncome} </p>
        <p>Company: {company} </p>
        <button onClick={() => props.handleAddUser (props.user)} className="btn btn-success m-3"> <FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
      </div>
    </div>
  );
};

export default UserList;
