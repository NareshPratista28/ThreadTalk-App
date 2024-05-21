import React from 'react';
import PropTypes from 'prop-types';

export const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

function LeaderboardItem({ user, score }) {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="w-8 h-8 rounded-full mr-4"
        />
        <span className="text-lg font-semibold">{user.name}</span>
      </div>
      <span className="text-lg font-semibold">{score}</span>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
