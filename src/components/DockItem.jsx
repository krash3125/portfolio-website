import { motion } from 'framer-motion';
import { useContext } from 'react';
import { WindowManagerContext } from '../context/WindowManager';

const DockItem = ({ index, src }) => {
  const { openWindow } = useContext(WindowManagerContext);

  return (
    <motion.img
      className="hover:cursor-pointer"
      whileHover={{ scale: 1.1 }}
      src={src}
      onClick={() => openWindow(index)}
    />
  );
};

export default DockItem;
