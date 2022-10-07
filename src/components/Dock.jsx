import Launchpad from '../assets/launchpad.png';
import Safari from '../assets/safari.png';
import iMessage from '../assets/imessage.png';
import VSCode from '../assets/vscode.png';
import Github from '../assets/github.png';
import Terminal from '../assets/terminal.png';
import DockItem from './DockItem';
import { useContext } from 'react';
import { WindowManagerContext } from '../context/WindowManager';

const Dock = () => {
  const { openWindow } = useContext(WindowManagerContext);

  return (
    <div className="h-dock mx-auto flex w-fit flex-row gap-3 rounded-xl border border-[#ffffff4a] bg-clear p-2 px-3">
      <DockItem src={Launchpad} index={0} onClick={() => openWindow(0)} />
      <DockItem src={Safari} index={1} onClick={() => openWindow(1)} />
      <DockItem src={iMessage} index={2} onClick={() => openWindow(2)} />
      <DockItem src={VSCode} index={3} onClick={() => openWindow(3)} />
      <DockItem
        src={Github}
        index={4}
        onClick={() => window.open('https://github.com/krash3125', '_blank')}
      />
      <DockItem src={Terminal} index={5} onClick={() => openWindow(5)} />
    </div>
  );
};

export default Dock;
