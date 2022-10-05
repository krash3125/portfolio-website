import ApplicationWrapper from '../ApplicationWrapper';
import { FiSmile } from 'react-icons/fi';
import Kush from '../../assets/Kush.jpeg';
import MIT from '../../assets/MIT.png';
import AppStore from '../../assets/appstore.png';
import ChatBar from './ChatBar';
import './index.css';
import Text from './Text';
import { useState } from 'react';
import { useEffect } from 'react';

const ChatList = () => {
  return (
    <div className="chat-view-blur h-full w-1/3 min-w-[300px] border-r border-apple-grey">
      <div className="mx-3 mt-3 flex flex-col gap-1">
        <div className="mb-3 flex h-7 items-center rounded-md bg-apple-grey px-2 text-sm text-apple-grey-text">
          *Icon* Search
        </div>
        <ChatBar
          name="Kush"
          description="Lets chat!"
          pfp={Kush}
          active={true}
        />
        <ChatBar name="MIT" description="Please join our college!" pfp={MIT} />
      </div>
    </div>
  );
};

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Send a message here to get in touch!', blue: false },
  ]);
  const [messageSent, setMessageSent] = useState(false);

  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  });

  useEffect(() => {
    if (!formData.name) {
      setMessages([
        ...messages,
        {
          text: 'Form is starting now (Type RESET to restart form).',
          blue: false,
        },
        { text: 'Start by entering your name...', blue: false },
      ]);
    } else if (!formData.email) {
      setMessages([
        ...messages,
        { text: 'Great! Now enter you email address...', blue: false },
      ]);
    } else if (!formData.message) {
      setMessages([
        ...messages,
        { text: 'Now finally type your message...', blue: false },
      ]);
    } else {
      setMessages([
        ...messages,
        {
          text: `Send Message? Name: ${formData.name} Email: ${formData.email} Message: ${formData.message} (Type CONFIRM to send.) `,
          blue: false,
        },
      ]);
    }
  }, [formData]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setMessages([...messages, { text: input, blue: true }]);

      if (input === 'RESET') {
        setFormData({
          name: null,
          email: null,
          message: null,
        });
      } else if (!formData.name) {
        setFormData({ ...formData, name: input });
      } else if (!formData.email) {
        setFormData({ ...formData, email: input });
      } else if (!formData.message) {
        setFormData({ ...formData, message: input });
      } else if (input === 'CONFIRM') {
        console.log('send message');
        console.log(formData);
        setMessages([
          ...messages,
          { text: 'Your message was successfully sent!', blue: false },
        ]);
        setMessageSent(true);
      } else {
        if (!messageSent) {
          setMessages([
            ...messages,
            {
              text: `Send Message? Name: ${formData.name} Email: ${formData.email} Message: ${formData.message} (Type CONFIRM to send.) `,
              blue: false,
            },
          ]);
        }
      }

      setInput('');
    }
  };

  return (
    <div className="chat-view-blur flex h-full w-2/3 min-w-[400px] flex-col bg-white">
      <div className="z-30 flex h-10 flex-row items-center bg-[#F7F7F7] px-4 text-sm">
        <a className="mr-1 text-apple-grey-text">To: </a> Kush
      </div>
      <div className="m-2 mt-auto flex flex-col gap-1 overflow-y-auto overflow-x-hidden">
        {messages &&
          messages?.map((message, index) => (
            <div
              key={index + 'message'}
              className={`${message.blue ? 'ml-auto' : ''}`}
            >
              <Text message={message.text} blue={message.blue} />
            </div>
          ))}
      </div>
      <div className="mx-4 my-4 flex flex-row gap-4">
        <img src={AppStore} className="my-auto h-6" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="iMessage"
          className="mx-auto h-7 w-5/6 rounded-full border border-apple-grey-text px-3 text-sm font-light  focus:outline-0"
        />
        <FiSmile className="my-auto" color="#999999" size={24} />
      </div>
    </div>
  );
};

const iMessage = ({ constraintsRef }) => {
  return (
    <ApplicationWrapper
      index={2}
      title="iMessage"
      constraintsRef={constraintsRef}
    >
      <div className="flex h-[500px] w-[700px] flex-row">
        <ChatList />
        <Chat />
      </div>
    </ApplicationWrapper>
  );
};

export default iMessage;
