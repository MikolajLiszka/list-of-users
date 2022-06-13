import React, {Component} from "react";
import "./users.css";
import UsersList from "./UsersList";

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }

    addUser = (event) => {
        event.preventDefault();

        let newUser = {
            id: Date.now(),
            name: this.inputName.value,
        }

        this.setState((state) => {
            return ({
                users: state.users.concat(newUser)
            });
        })

        this.inputName.value = "";
    }

    removeUser = (userID) => {
        this.setState((state) => {
            return({
                users: state.users.filter((user) => {return(user.id !== userID)})
            });
        });
    }

    render() {
        return(
            <div className="users">
                <h1>User's list</h1>
                    <form onSubmit={this.addUser}>
                        <input ref={(element) => {this.inputName = element;}} className="users-input" placeholder="Enter name" type="text"/>
                        <button type="submit" className="add-btn">Add user</button>
                    </form>
                <UsersList usersList={this.state.users} removeSelectedUser={this.removeUser}/>
            </div>
        );
    }
}

export default Users;