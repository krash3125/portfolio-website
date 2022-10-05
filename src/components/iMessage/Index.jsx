import ApplicationWrapper from '../ApplicationWrapper';
import DragableDiv from '../DragableDiv';
import './index.css';

const Index = ({ constraintsRef }) => {
  return (
    <ApplicationWrapper title="iMessage" constraintsRef={constraintsRef}>
      {/* <div className="flex h-full flex-row">
          <div className="chat-view-blur h-full w-1/3 min-w-[300px] border-r border-[#C4C4C4]" />
          <div className="chat-view-blur h-full w-2/3 min-w-[400px]" />
        </div> */}
      <div className="h-[500px] w-[700px] bg-blue-500"></div>
    </ApplicationWrapper>
  );
};

export default Index;
