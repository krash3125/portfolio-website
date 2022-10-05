import Dock from './components/Dock';
import DragableArea from './components/DragableArea';
import MenuBar from './components/MenuBar.jsx';

const App = () => {
  return (
    <div className="bg-img-ventura h-screen">
      <MenuBar />
      <DragableArea />
      <Dock />
    </div>
  );
};

export default App;
