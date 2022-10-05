import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import DragableDiv from './DragableDiv';
import Index from './iMessage/Index';
import VSCode from './VSCode';

const DragableArea = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div className="h-dragable-area" ref={constraintsRef}>
      {/* <DragableDiv
        className="h-40 w-40 bg-green-500"
        constraintsRef={constraintsRef}
      /> */}
      {/* <Index constraintsRef={constraintsRef} /> */}
      <VSCode constraintsRef={constraintsRef} />
    </motion.div>
  );
};

export default DragableArea;
