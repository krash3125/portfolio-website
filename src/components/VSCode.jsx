import React from 'react';
import ApplicationWrapper from './ApplicationWrapper';

const VSCode = ({ constraintsRef }) => {
  return (
    <ApplicationWrapper
      title="Visual Studio Code"
      constraintsRef={constraintsRef}
    >
      <div className="h-[600px] w-[900px]">
        <iframe
          className="h-full w-full"
          src="https://github1s.com/krash3125/portfolio-website/readme.md"
        />
      </div>
    </ApplicationWrapper>
  );
};

export default VSCode;
