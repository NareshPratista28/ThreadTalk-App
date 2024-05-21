import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/ThreadList';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
} from '../states/threads/action';

function HomePage() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const { threads = [], users = [], authUser } = useSelector((state) => state);

  const categories = new Set(threads.map((thread) => thread.category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralizeVoteThread = (id) => {
    dispatch(asyncNeutralizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="max-w-screen-sm h-full mx-auto bg-background p-4 mt-0">
      <div className="flex flex-wrap mb-4 justify-center">
        {Array.from(categories).map((category) => (
          <button
            type="button"
            key={category}
            className={`text-sm px-3 py-1 rounded-lg font-medium ${filter === category ? 'bg-accent text-white' : 'bg-gray-200 text-background'} m-1 hover:bg-accent hover:text-white transition-colors duration-200`}
            onClick={() => setFilter(category === filter ? '' : category)}>
            #{category}
          </button>
        ))}
      </div>

      <ThreadList
        threads={
          filter
            ? threadList.filter((thread) => thread.category === filter)
            : threadList
        }
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        neutralizeVote={onNeutralizeVoteThread}
      />
    </div>
  );
}

export default HomePage;
