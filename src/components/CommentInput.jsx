import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');
  const onCommentSubmit = (event) => {
    event.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <div className="max-w-2xl mx-auto mt-4">
      <form onSubmit={onCommentSubmit} className="flex flex-col space-y-4">
        <textarea
          className="textarea textarea-solid max-w-full bg-foreground  shadow-sm "
          rows="3"
          placeholder="Add a comment..."
          value={comment}
          onChange={onCommentChange}
        />
        <button
          type="submit"
          onClick={onCommentSubmit}
          className="rounded-lg btn btn-block  bg-accent  ">
          Post Comment
        </button>
      </form>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
