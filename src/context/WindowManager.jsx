import { createContext, useState } from 'react';

const WindowManagerContext = createContext();

export const WINDOW_MAP = {
  0: 'Launchpad',
  1: 'Safari',
  2: 'iMessage',
  3: 'VSCode',
};

const WindowManagerProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);

  const openWindow = (windowIndex) => {
    setWindows([...windows, windowIndex]);
  };

  const closeWindow = (windowIndex) => {
    setWindows(windows.filter((window) => window !== windowIndex));
  };

  return (
    <WindowManagerContext.Provider value={{ windows, openWindow, closeWindow }}>
      {children}
    </WindowManagerContext.Provider>
  );
};

export { WindowManagerContext, WindowManagerProvider };
