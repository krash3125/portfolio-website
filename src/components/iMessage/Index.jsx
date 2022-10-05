import ApplicationWrapper from '../ApplicationWrapper';
import DragableDiv from '../DragableDiv';
import Kush from '../../assets/Kush.jpeg';
import MIT from '../../assets/MIT.png';
import ChatBar from './ChatBar';
import './index.css';

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

const Index = ({ constraintsRef }) => {
  return (
    <ApplicationWrapper title="iMessage" constraintsRef={constraintsRef}>
      <div className="flex h-[500px] w-[700px] flex-row">
        <ChatList />
        <div className="chat-view-blur h-full w-2/3 min-w-[400px]" />
      </div>
    </ApplicationWrapper>
  );
};

export default Index;
