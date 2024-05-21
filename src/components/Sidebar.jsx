/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { FaThreads } from 'react-icons/fa6';
import { MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar({ signOut }) {
  const navigate = useNavigate();

  return (
    <div className="sticky flex top-0 left-0 h-full gap-4">
      <aside className="sidebar-sticky sidebar justify-start ">
        <section className="sidebar-title items-center p-4 ml-5 mt-3">
          <div className="flex flex-col">
            <span>ThreadTalk</span>
            <span className="text-xs font-normal text-content2">
              Where Conversations Unravel
            </span>
          </div>
        </section>
        <div className="divider my-0" />
        <section className="sidebar-content ml-4 pr-4 min-h-[20rem]">
          <nav className="menu rounded-md">
            <ul className="menu-items pr-6">
              <Link to="/">
                <li className="menu-item flex items-center gap-2">
                  <FaThreads className="h-5 w-5 opacity-75" />
                  <span>Threads</span>
                </li>
              </Link>
              <Link to="/leaderboards">
                <li className="menu-item flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>Leaderboards</span>
                </li>
              </Link>
              <li className="menu-item-no-animation m-5 ">
                <button
                  type="button"
                  className="btn w-full bg-accent text-white font-bold text-base hover:bg-red-600"
                  onClick={() => navigate('/new-thread')}>
                  + New Thread
                </button>
              </li>
            </ul>
          </nav>
        </section>
        <section className="sidebar-footer">
          <div className="divider my-0" />
          <button
            type="button"
            onClick={signOut}
            className=" flex items-center justify-between w-full my-5 px-5 cursor-pointer">
            <div className="btn bg-disabled hover:bg-zinc-800 btn-block text-white font-bold text-base flex flex-row gap-4 items-center">
              <MdLogout className="h-5 w-5" />
              <button className="flex flex-col">Logout</button>
            </div>
          </button>
        </section>
      </aside>
    </div>
  );
}

Sidebar.propTypes = {
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Sidebar;
