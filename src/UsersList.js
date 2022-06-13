import React from "react";
import "./UsersList.css"

function UsersList (props) {
        
        let usersList = props.usersList;
        let usersLiElements = usersList.map((user) => {
            return <li onClick={() => {props.removeSelectedUser(user.id);}} key={user.id}>{user.name}</li>
        });

        return (
        <ul className="list">
            {usersLiElements}
        </ul>
        )
}

export default UsersList;