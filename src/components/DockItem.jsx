import { motion } from 'framer-motion';

const DockItem = ({ src }) => {
  return (
    <motion.img
      className="hover:cursor-pointer"
      whileHover={{ scale: 1.1 }}
      src={src}
    />
  );
};

export default DockItem;
