import React from 'react';

const UserCard = props => {
    const { user } = props;

    return(
        <div>
            <img src={user.picture.large} alt="User Pic"></img>
            <p>
                {user.name.title}{user.name.first}{user.name.last}
            </p>
        </div>
    );
};

export default UserCard;