import React, {Component} from 'react';

class UserCard extends Component {
    state = {
        user: "Getting user data..."
    }
    async componentDidMount() {
        try{
            const response = await fetch("https://randomuser.me/api/?results=1");
            const data = await response.json(); 
            this.setState({
                user: data.results.gender
            })
            console.log(data);

            // return data.results;

        } catch(error) {
            this.setState({
                user: error.message
            })
        }
    }

    render() {
        const { user } = this.state;
        return (
            <p>
                {user}
            </p>
        );
    }
}

export default UserCard;