import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <LoadingBar
        className="h-1 bg-accent"
        updateTime={100}
        maxProgress={100}
        showFastestLoader
      />
    </div>
  );
}

export default Loading;
