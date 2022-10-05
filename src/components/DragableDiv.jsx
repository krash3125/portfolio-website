import { motion, useDragControls } from 'framer-motion';
import React from 'react';

const DragableDiv = ({
  dragControls,
  dragListener,
  className,
  children,
  constraintsRef,
}) => {
  return (
    <motion.div
      className={className}
      drag
      dragElastic={false}
      dragMomentum={false}
      dragSnapToOrigin={false}
      dragConstraints={constraintsRef}
      dragControls={dragControls}
      dragListener={dragListener}
    >
      {children}
    </motion.div>
  );
};

export default DragableDiv;
