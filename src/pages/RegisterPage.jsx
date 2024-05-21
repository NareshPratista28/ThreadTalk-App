import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRegister = (name, email, password) => {
    dispatch(asyncRegisterUser({ name, email, password }))
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        alert(`Registration failed: ${error.message}`);
      });
  };

  return (
    <section className="grid min-h-screen">
      <header className="bg-accent flex items-center justify-center text-[100px]">
        <div className="flex flex-col font-bold text-center text-white">
          <span>ThreadTalk</span>
          <span className="text-xl font-normal mb-2">
            Where Conversations Unravel!
          </span>
        </div>
      </header>
      <article className="bg-background flex flex-col justify-center p-18 gap-6">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6 text-white">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Create Account</h1>
          </div>
          <div className="form-group">
            <RegisterInput register={onRegister} />
          </div>
        </div>
        <div className="form-field">
          <div className="form-control justify-center">
            <Link to="/login" className="link link-underline-hover text-sm">
              Already have an account? Sign in.
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

export default RegisterPage;
