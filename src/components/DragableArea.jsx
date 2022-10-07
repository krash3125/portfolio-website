import { motion } from 'framer-motion';
import React, { Fragment } from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { WindowManagerContext } from '../context/WindowManager';
import Messages from './iMessage/iMessages';
import Terminal from './Terminal/Terminal';
import VSCode from './VSCode';

const DragableArea = () => {
  const constraintsRef = useRef(null);
  const { windows } = useContext(WindowManagerContext);

  const components = [
    null,
    null,
    <Messages constraintsRef={constraintsRef} />,
    <VSCode constraintsRef={constraintsRef} />,
    null,
    <Terminal constraintsRef={constraintsRef} />,
  ];

  return (
    <motion.div className="h-dragable-area" ref={constraintsRef}>
      {windows?.map((i) => (
        <Fragment key={i}>{components[i]}</Fragment>
      ))}
    </motion.div>
  );
};

export default DragableArea;
