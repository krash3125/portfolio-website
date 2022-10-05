import Launchpad from '../assets/launchpad.png';
import Safari from '../assets/safari.png';
import iMessage from '../assets/imessage.png';
import VSCode from '../assets/vscode.png';
import DockItem from './DockItem';

const Dock = () => {
  return (
    <div className="h-dock mx-auto flex w-fit flex-row gap-3 rounded-xl border border-[#ffffff4a] bg-clear p-2">
      <DockItem src={Launchpad} />
      <DockItem src={Safari} />
      <DockItem src={iMessage} />
      <DockItem src={VSCode} />
    </div>
  );
};

export default Dock;
