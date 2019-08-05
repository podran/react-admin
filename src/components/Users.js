import React, { Component } from 'react'

export class Users extends Component {
    constructor(props){
        super(props);
        this.state= {
            users: []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
            this.setState({
                users: users
            });
            console.log(this.state.users);
        });
    }
    render() {
        return (
            <div>
                {this.state.users.map((user, i) => <div key={i}>{user.name}</div>)}
            </div>
        )
    }
}

export default Users
