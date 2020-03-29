import React from 'react';
import UserCard from './userCard';

const UserCardList = props => {
  const { userData } = props;
  return (
    <ul className="UserCardList">
      {userData.length > 0 ? (
        userData.map(user => (
          <li className="UserCard" key={user.login.uuid}>
            <UserCard user={user} />
          </li>
        ))
      ) : (
        <li>No User Data</li>
      )}
    </ul>
  );
};

export default UserCardList;