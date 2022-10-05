import { motion, MotionConfig, useDragControls } from 'framer-motion';
import React from 'react';

const ApplicationControls = () => {
  return (
    <div className="absolute flex gap-2">
      <div className="h-3 w-3 rounded-full bg-apple-red" />
      <div className="h-3 w-3 rounded-full bg-apple-yellow" />
      <div className="h-3 w-3 rounded-full bg-apple-green" />
    </div>
  );
};

const ApplicationBar = ({ title, controls }) => {
  return (
    <div
      className="z-50 flex h-7 items-center bg-white"
      onMouseDown={(e) => dragControls.start(e)}
    >
      <div className="mx-3 flex w-full items-center gap-4">
        <ApplicationControls />
        <span className="mx-auto font-bold">{title}</span>
      </div>
    </div>
  );
};

const ApplicationWrapper = ({ title, children }) => {
  const controls = useDragControls();

  return (
    <DragableDiv
      className="h-[500px] w-[700px] overflow-hidden rounded-md bg-[#C4C4C4] "
      constraintsRef={constraintsRef}
      controls={controls}
    >
      <div className="flex flex-col">
        <ApplicationBar title={title} controls={controls} />
        <div className="h-64 w-64">{children}</div>
      </div>
    </DragableDiv>
  );
};

export default ApplicationWrapper;
