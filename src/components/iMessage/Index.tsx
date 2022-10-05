import ApplicationWrapper from './ApplicationWrapper';
import DragableDiv from '../DragableDiv';
import './index.css';

type Props = {
  constraintsRef: React.RefObject<HTMLDivElement>;
};

const Index = ({ constraintsRef }: Props) => {
  return (
    <ApplicationWrapper title="iMessage">
      {/* <div className="flex h-full flex-row">
          <div className="chat-view-blur h-full w-1/3 min-w-[300px] border-r border-[#C4C4C4]" />
          <div className="chat-view-blur h-full w-2/3 min-w-[400px]" />
        </div> */}
      <div className="h-full w-full bg-blue-500"></div>
    </ApplicationWrapper>
  );
};

export default Index;
