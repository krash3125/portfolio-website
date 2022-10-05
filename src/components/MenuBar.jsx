import { useEffect, useState } from 'react';
import { BsApple } from 'react-icons/bs';

const MenuBar = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <div className="h-menu-bar menu-bar-blur noselect flex flex-row items-center p-1 px-3 text-sm font-semibold text-white">
      <BsApple color="white" size={17} />
      <a className="ml-auto">{date.toDateString().slice(0, -4)}</a>
      <a className="ml-2">
        {date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </a>
    </div>
  );
};

export default MenuBar;
