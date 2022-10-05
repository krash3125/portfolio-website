import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  className?: string;
  children?: JSX.Element;
  constraintsRef: React.RefObject<HTMLDivElement>;
};

const DragableDiv = ({ className, children, constraintsRef }: Props) => {
  return (
    <motion.div
      className={className}
      drag
      dragElastic={false}
      dragMomentum={false}
      dragSnapToOrigin={false}
      dragConstraints={constraintsRef}
    >
      {children}
    </motion.div>
  );
};

export default DragableDiv;
