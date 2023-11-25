import React from 'react';
import PropTypes from 'prop-types'; 

const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      {stats && (
        <ul className="stats">
          {Object.entries(stats).map(([label, quantity]) => (
            <li key={label}>
              <span className="label">{label}</span>
              <span className="quantity">{quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};

export default Profile;
