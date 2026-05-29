import React from "react";

const UserCard = (props) => (
    <div style = {{ border: "1px solid black" , margin: "10px" , padding: "10px"}}>
        <h2>{props.name}</h2>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
    </div>
)

export default UserCard;