import { useEffect, useMemo, useRef, useState } from 'react';
import ApplicationWrapper from '../ApplicationWrapper';

const CONSOLE_START = 'kush@macbook-pro ~ %';
const DATE = new Date()
  .toLocaleDateString('en-us', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
    second: '2-digit',
    hour12: false,
  })
  .replaceAll(',', '');

const TERMINAL_RESPONSE = {
  help: [
    'ls - list directory contents',
    'cd <dir> - change directory',
    'cat <file> - display file contents',
    'clear - clear the terminal screen',
  ],
  ls: ['About', 'Applications', 'Desktop', 'Documents', 'Downloads', 'Library'],
};

const DIRECTORY = {
  about: {
    isFile: false,
    contact_txt: {
      isFile: true,
      content: <div></div>,
    },
  },
  applications: {},
  desktop: {},
  documents: {},
  downloads: {},
  library: {},
};

const Response = ({ command, text }) => {
  return (
    <>
      <div>
        {CONSOLE_START} {command}
      </div>
      <div>zsh: command not found: {text}</div>
    </>
  );
};

const Terminal = ({ constraintsRef }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [currentDir, setCurrentDir] = useState('');
  const inputRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  const handleCommand = (command) => {
    switch (command) {
      case 'help':
        help();
        break;
      case 'ls':
        ls();
        break;
      case '':
        setOutput([...output, <div>{CONSOLE_START}</div>]);
        break;
      case 'clear':
        setOutput([]);
        break;
      default:
        setOutput([...output, <Response command={input} text={input} />]);
        break;
    }
  };

  const cd = () => {};

  const help = () => {
    const res = (
      <>
        <div>{CONSOLE_START} help</div>
        <ul className="list-inside list-disc">
          {TERMINAL_RESPONSE.help.map((cmd) => (
            <li className="m-0 ml-4">
              <span className="text-purple-400">
                {cmd.slice(0, cmd.indexOf('-'))}
              </span>{' '}
              {cmd.slice(cmd.indexOf('-'))}{' '}
            </li>
          ))}
        </ul>
      </>
    );

    setOutput([...output, res]);
  };

  const ls = () => {
    const res = (
      <>
        <div className="flex">{CONSOLE_START} ls</div>
        {TERMINAL_RESPONSE.ls.map((item) => (
          <div className="inline-block w-1/3 text-purple-400">{item}</div>
        ))}
      </>
    );

    setOutput([...output, res]);
  };

  return (
    <ApplicationWrapper
      index={5}
      title="Terminal"
      constraintsRef={constraintsRef}
    >
      <div
        className="resize-simple application-min-size h-[350px] w-[550px] overflow-y-auto bg-[#1E1E1E] p-1 font-code text-sm text-white"
        onClick={() => inputRef.current.focus()}
      >
        <div>Last login: {DATE} on ttys002</div>
        <div>
          Run <span className="text-purple-400">help</span> to see a list of
          commands
        </div>
        {output.map((text) => text)}
        <div className="flex">
          {CONSOLE_START}
          <input
            ref={inputRef}
            className="ml-2 flex-grow border-none bg-transparent outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default Terminal;
