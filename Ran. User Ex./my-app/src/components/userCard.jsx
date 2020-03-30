import React from 'react';

const UserCard = props => {
    const { user } = props;

    return(
        <div>
            <img src={user.picture.large} alt="User Pic"></img>
            <p>Name: 
                {" " + user.name.title + ". "}{user.name.first + " "}{user.name.last}
            </p>
            <br></br>
            <p>Location:
            {" " + user.location.street.number + " "}{user.location.street.name + " "}{user.location.postcode}
            </p>
            <p>
            {user.location.city + ", "}{user.location.state + " "}{user.location.country}
            </p>
            <br></br>
            <p>Contact Info:
            {" Email - " + user.email}
            </p>
            <p>
            {" Home Phone - " + user.phone}
            </p>
            <p>
                {" Cell Phone - " + user.cell}
            </p>
        </div>
    );
};

export default UserCard;