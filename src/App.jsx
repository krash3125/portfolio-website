import Dock from './components/Dock';
import DragableArea from './components/DragableArea';
import MenuBar from './components/MenuBar.jsx';
import { WindowManagerProvider } from './context/WindowManager';

const App = () => {
  return (
    <WindowManagerProvider>
      <div className="bg-img-ventura h-screen">
        <MenuBar />
        <DragableArea />
        <Dock />
      </div>
    </WindowManagerProvider>
  );
};

export default App;
