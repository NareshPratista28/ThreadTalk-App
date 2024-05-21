/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({}) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="form-group">
      <div className="form-field">
        <label className="form-label">Email address</label>
        <input
          required
          id="email"
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          className="input max-w-full"
        />
      </div>
      <div className="form-field">
        <label className="form-label">Password</label>
        <div className="form-control">
          <input
            required
            id="password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
            className="input max-w-full"
          />
        </div>
      </div>
      <div className="form-field pt-5">
        <div className="form-control justify-between">
          <button type="submit" className="btn bg-accent w-full">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
