import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import NewThreadPage from './pages/NewThreadPage';
import LeaderboardPage from './pages/LeaderboardPage';
import DetailPage from './pages/DetailPage';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const { isPreload = false, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };
  if (isPreload) {
    return null;
  }
  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Loading />
      <div className="flex-none w-100 ">
        <Sidebar authUser={authUser} signOut={onSignOut} />
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/new-thread" element={<NewThreadPage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
