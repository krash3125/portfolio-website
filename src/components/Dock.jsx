import Launchpad from '../assets/launchpad.png';
import Safari from '../assets/safari.png';
import iMessage from '../assets/imessage.png';
import VSCode from '../assets/vscode.png';
import DockItem from './DockItem';

const Dock = () => {
  return (
    <div className="h-dock mx-auto flex w-fit flex-row gap-3 rounded-xl border border-[#ffffff4a] bg-clear p-2 px-3">
      <DockItem src={Launchpad} index={0} />
      <DockItem src={Safari} index={1} />
      <DockItem src={iMessage} index={2} />
      <DockItem src={VSCode} index={3} />
    </div>
  );
};

export default Dock;
