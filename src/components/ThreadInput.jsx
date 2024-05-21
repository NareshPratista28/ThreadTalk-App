/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form className="space-y-4">
        <div className="w-full">
          <label className="sr-only" htmlFor="name">
            Title
          </label>
          <input
            className="input input-solid max-w-full"
            placeholder="Title"
            value={title}
            onChange={onTitleChange}
          />
        </div>

        <div className="w-full">
          <label className="sr-only" htmlFor="category">
            Category
          </label>
          <input
            className="input input-solid max-w-full"
            placeholder="Category"
            value={category}
            onChange={onCategoryChange}
          />
        </div>
        <div className="w-full">
          <label className="sr-only" htmlFor="message">
            Body
          </label>

          <textarea
            className="textarea textarea-solid max-w-full"
            placeholder="Message"
            rows="8"
            value={body}
            onChange={onBodyChange}
          />
        </div>

        <div className="mt-4">
          <button
            onClick={() => addThread({ title, body, category })}
            type="button"
            className="rounded-lg btn font-bold bg-accent btn-block">
            Add Thread
          </button>
        </div>
      </form>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
