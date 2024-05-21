import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { userShape } from './ThreadItem';
import VoteControl from './VoteControl';
import postedAt from '../utils';

function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neutralizeVote,
  authUser,
}) {
  return (
    <div className="bg-foreground p-4 rounded-lg shadow my-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            alt="Avatar Icon"
            src={owner.avatar}
            className="w-5 h-5 rounded-full"
          />
          <span className="font-bold text-sm ">{owner.name}</span>
        </div>
        <span className="text-xs ">{postedAt(createdAt)}</span>
      </div>

      <div className="mt-2">
        <p className="text-sm">{parse(content)}</p>
      </div>

      <div className="flex justify-start mt-4">
        <VoteControl
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neutralizeVote={neutralizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </div>
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export default CommentItem;
export { commentShape };
