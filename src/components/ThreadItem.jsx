/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { FaRegCommentDots } from 'react-icons/fa';
import VoteControl from './VoteControl';
import postedAt from '../utils';

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neutralizeVote,
  threadOwner,
  authUser,
}) {
  const navigate = useNavigate();
  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  return (
    <div
      onClick={onThreadClick}
      className="bg-foreground shadow-lg rounded-xl mb-4 cursor-pointer">
      <div className="p-4">
        <div className="text-sm text-gray-400">#{category}</div>
        <div className="text-xl font-bold text-gray-100 mb-2 mt-2">
          {truncateText(title, 1000)}
        </div>
        <div className="text-gray-300 text-base">
          {parse(truncateText(body, 100))}
        </div>
      </div>
      <div className="px-4 py-2 flex items-center">
        <VoteControl
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neutralizeVote={neutralizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <FaRegCommentDots className="ml-2 text-gray-400" fontSize="medium" />
        <span className="ml-2 font-medium text-gray-400">{totalComments}</span>
        <span className="ml-2 font-medium text-gray-400">
          {postedAt(createdAt)}
        </span>
        <span className="ml-2 font-semibold text-gray-300">
          Created by {threadOwner.name}
        </span>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
};

export { threadItemShape, userShape };
