import React from 'react';

const Text = ({ message, blue = false }) => {
  return (
    <div
      className={`flex h-fit w-fit max-w-xs	 items-center justify-center overflow-x-hidden rounded-2xl py-1 px-3 text-sm ${
        blue ? 'bg-apple-blue text-white' : 'bg-apple-grey text-black'
      }`}
    >
      {message}
    </div>
  );
};

export default Text;
