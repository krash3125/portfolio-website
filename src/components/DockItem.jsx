import { motion } from 'framer-motion';
import { useContext } from 'react';
import { WindowManagerContext } from '../context/WindowManager';

const DockItem = ({ index, src, onClick }) => {
  return (
    <motion.img
      className="hover:cursor-pointer"
      whileHover={{ scale: 1.2 }}
      src={src}
      onClick={onClick}
    />
  );
};

export default DockItem;
