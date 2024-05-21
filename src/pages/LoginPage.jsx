import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <section className="grid min-h-screen">
      <header className="bg-accent flex items-center justify-center text-[100px]">
        <div className="flex flex-col font-bold text-center text-white">
          <span>ThreadTalk</span>
          <span className="text-xl font-normal mb-2">
            Where Conversations Unravel!!!
          </span>
        </div>
      </header>
      <article className="bg-background flex flex-col justify-center p-18 gap-6">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6 text-white">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Sign In</h1>
          </div>
          <div className="form-group">
            <LoginInput login={onLogin} />
          </div>
        </div>
        <div className="form-field">
          <div className="form-control justify-center">
            <Link to="/register" className="link link-underline-hover text-sm">
              Dont have an account yet? Sign up.
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

export default LoginPage;
