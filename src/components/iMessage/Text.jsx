import React from 'react';

const Text = ({ message, blue = false }) => {
  return (
    <div
      className={`flex h-7 w-fit items-center justify-center rounded-full px-3 text-sm ${
        blue ? 'bg-apple-blue text-white' : 'bg-apple-grey text-black'
      }`}
    >
      {message}
    </div>
  );
};

export default Text;
