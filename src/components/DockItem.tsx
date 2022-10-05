import { motion } from 'framer-motion';

type Props = {
  src?: any;
};

const DockItem = ({ src }: Props) => {
  return (
    <motion.img
      className="hover:cursor-pointer"
      whileHover={{ scale: 1.1 }}
      src={src}
    />
  );
};

export default DockItem;
