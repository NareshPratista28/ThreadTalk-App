import React from 'react';
import PropTypes from 'prop-types';
import {
  IoThumbsUpOutline,
  IoThumbsUp,
  IoThumbsDownOutline,
  IoThumbsDown,
} from 'react-icons/io5';

function VoteControl({
  id,
  upVote,
  downVote,
  upVotesBy,
  downVotesBy,
  neutralizeVote,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = () => {
    if (isUpVoted) {
      neutralizeVote(id);
    } else {
      upVote(id);
    }
  };

  const onDownVoteClick = () => {
    if (isDownVoted) {
      neutralizeVote(id);
    } else {
      downVote(id);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={onUpVoteClick}
        className="flex items-center space-x-1">
        {isUpVoted ? (
          <IoThumbsUp className="text-gray-400 h-5 w-5" />
        ) : (
          <IoThumbsUpOutline className="text-gray-400 hover:text-accent h-5 w-5" />
        )}
        <span className="text-sm text-gray-400">{upVotesBy.length}</span>
      </button>

      <button
        type="button"
        onClick={onDownVoteClick}
        className="flex items-center space-x-1">
        {isDownVoted ? (
          <IoThumbsDown className="text-red-500 h-5 w-5" />
        ) : (
          <IoThumbsDownOutline className="text-gray-400 hover:text-accent h-5 w-5" />
        )}
        <span className="text-sm text-gray-400">{downVotesBy.length}</span>
      </button>
    </div>
  );
}

VoteControl.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default VoteControl;
