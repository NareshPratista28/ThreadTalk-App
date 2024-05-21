/**
 * skenario test
 *
 * - asyncPopulateLeaderboards thunk
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and call alert correctly when data fetching failed
 */
import { afterEach, beforeEach, describe, it, vi, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  receiveLeaderboardsActionCreator,
  asyncPopulateLeaderboards,
} from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'User Test',
      email: 'user@test.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 100,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderBoards = api.getLeaderBoards;
  });
  afterEach(() => {
    api.getLeaderBoards = api._getLeaderBoards;

    // delete backup data
    delete api._getLeaderBoards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderBoards = () => Promise.resolve(fakeLeaderboardsResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderBoards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
