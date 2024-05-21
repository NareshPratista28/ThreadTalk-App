import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentShape } from './CommentItem';

function CommentList({
  comments,
  authUser,
  upVoteComment,
  downVoteComment,
  neutralizeVoteComment,
}) {
  return (
    <div className="max-w-2xl mx-auto mt-4">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            {...comment}
            authUser={authUser}
            upVote={() => upVoteComment(comment.id)}
            downVote={() => downVoteComment(comment.id)}
            neutralizeVote={() => neutralizeVoteComment(comment.id)}
          />
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neutralizeVoteComment: PropTypes.func.isRequired,
};

export default CommentList;
