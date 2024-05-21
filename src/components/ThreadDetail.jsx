import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { userShape } from './ThreadItem';
import VoteControl from './VoteControl';
import postedAt from '../utils';

function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neutralizeVoteThreadDetail,
  authUser,
}) {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-foreground rounded-lg shadow">
      <div className="mb-2">
        <span className="text-sm">{category}</span>
      </div>
      <h1 className="text-2xl font-bold  mb-4">{title}</h1>
      <div className=" text-base mb-4">{parse(body)}</div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={owner.avatar}
            alt="Avatar Icon"
          />
          <span className="font-medium">{owner.name}</span>
        </div>
        <span className="text-sm">{postedAt(createdAt)}</span>
      </div>
      <div>
        <VoteControl
          id={id}
          authUser={authUser}
          upVote={upVoteThreadDetail}
          downVote={downVoteThreadDetail}
          neutralizeVote={neutralizeVoteThreadDetail}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neutralizeVoteThreadDetail: PropTypes.func.isRequired,
};

export default ThreadDetail;
