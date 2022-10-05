import { motion, MotionConfig, useDragControls } from 'framer-motion';
import DragableDiv from './DragableDiv';
import React from 'react';
import { useContext } from 'react';
import { WindowManagerContext } from '../context/WindowManager';
import { FiX, FiMinus, FiPlus } from 'react-icons/fi';

const ApplicationControls = ({ index }) => {
  const { closeWindow } = useContext(WindowManagerContext);

  return (
    <div className="application-controls absolute flex gap-2">
      <div
        className="flex h-3 w-3 items-center justify-center rounded-full bg-apple-red hover:cursor-pointer"
        onClick={() => closeWindow(index)}
      >
        <FiX className="control-icons hidden" size={9} strokeWidth={2.5} />
      </div>
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-apple-yellow hover:cursor-pointer">
        <FiMinus className="control-icons hidden" size={9} strokeWidth={2.5} />
      </div>
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-apple-green hover:cursor-pointer">
        <FiPlus className="control-icons hidden" size={9} strokeWidth={2.5} />
      </div>
    </div>
  );
};

const ApplicationBar = ({ index, title, dragControls }) => {
  return (
    <div
      className="z-50 flex h-7 items-center bg-white"
      onMouseDown={(e) => dragControls.start(e)}
    >
      <div className="mx-3 flex w-full items-center gap-4">
        <ApplicationControls index={index} />
        <span className="mx-auto font-bold">{title}</span>
      </div>
    </div>
  );
};

const ApplicationWrapper = ({ index, title, children, constraintsRef }) => {
  const dragControls = useDragControls();

  return (
    <DragableDiv
      className="application-min-size h-fit w-fit overflow-hidden rounded-md bg-[#C4C4C4]"
      constraintsRef={constraintsRef}
      dragControls={dragControls}
      dragListener={false}
    >
      <div className="flex flex-col">
        <ApplicationBar
          index={index}
          title={title}
          dragControls={dragControls}
        />
        {children}
      </div>
    </DragableDiv>
  );
};

export default ApplicationWrapper;
