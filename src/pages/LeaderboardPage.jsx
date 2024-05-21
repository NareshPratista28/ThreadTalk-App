import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardItem from '../components/LeaderboardItem';
import { asyncPopulateLeaderboards } from '../states/leaderboards/action';

function LeaderboardPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <div className="container rounded-md max-w-2xl mx-auto py-8">
      <div className="bg-foreground shadow-md rounded-lg p-4">
        <h1 className="text-3xl font-bold mb-4">Leaderboards</h1>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">User</h2>
          <h2 className="text-xl font-bold">Score</h2>
        </div>
        {leaderboards.map(({ user, score }) => (
          <LeaderboardItem key={user.id} user={user} score={score} />
        ))}
      </div>
    </div>
  );
}

export default LeaderboardPage;
