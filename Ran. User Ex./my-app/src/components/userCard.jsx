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
                firstName: data.results[0].name.first,
                
                email: data.results[0].email,
                gender: data.results[0].gender
            })
            console.log(data);

            // return data.results;

        } catch(error) {
            this.setState({
                firstName: error.message,
                email: error.message,
                gender: error.message
            })
        }
    }

    render() {
        const { email, gender, firstName } = this.state;
        return (
            <p>
                {firstName}
                <br></br>
                {email}
                <br></br>
                {gender}
            </p>
        );
    }
}

export default UserCard;