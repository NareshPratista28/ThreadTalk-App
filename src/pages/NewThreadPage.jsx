import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncCreateThread } from '../states/threads/action';

function NewThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };
  return (
    <section className="p-8">
      <ThreadInput addThread={onAddThread} />
    </section>
  );
}

export default NewThreadPage;
