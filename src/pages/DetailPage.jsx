import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
  asyncCreateComment,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (threadDetail) {
      setComments(threadDetail.comments);
    }
  }, [threadDetail]);

  const onUpVote = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVote = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onNeutralizeVote = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  const onCommentUpVote = (commentId) => {
    dispatch(asyncUpVoteComment(commentId));
  };

  const onCommentDownVote = (commentId) => {
    dispatch(asyncDownVoteComment(commentId));
  };

  const onCommentNeutralizeVote = (commentId) => {
    dispatch(asyncNeutralizeVoteComment(commentId));
  };

  const onAddComment = (content) => {
    dispatch(asyncCreateComment({ content }));
  };

  return (
    <div className="mx-auto p-4 mt-10">
      {threadDetail && (
        <>
          <ThreadDetail
            id={threadDetail.id}
            title={threadDetail.title}
            body={threadDetail.body}
            owner={threadDetail.owner}
            category={threadDetail.category}
            createdAt={threadDetail.createdAt}
            upVotesBy={threadDetail.upVotesBy}
            downVotesBy={threadDetail.downVotesBy}
            upVoteThreadDetail={onUpVote}
            downVoteThreadDetail={onDownVote}
            neutralizeVoteThreadDetail={onNeutralizeVote}
            authUser={authUser.id}
          />
          <CommentInput addComment={onAddComment} />
          <CommentList
            comments={comments}
            authUser={authUser.id}
            upVoteComment={onCommentUpVote}
            downVoteComment={onCommentDownVote}
            neutralizeVoteComment={onCommentNeutralizeVote}
          />
        </>
      )}
    </div>
  );
}

export default DetailPage;
