import Thread from "./Thread";
import { User } from "./userTypes";
import { ThreadType } from "./threadTypes";

interface FeedProps {
  user: User;
  filteredThreads: ThreadType[];
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  getThreads: () => void;
  setInteractingThread: React.Dispatch<React.SetStateAction<ThreadType | null>>;
}

const Feed: React.FC<FeedProps> = ({
  user,
  filteredThreads,
  setOpenPopUp,
  getThreads,
  setInteractingThread,
}) => {
  return (
    <div className="feed">
      {filteredThreads?.map((filteredThread) => (
        <Thread
          key={filteredThread.id}
          user={user}
          filteredThread={filteredThread}
          setOpenPopUp={setOpenPopUp}
          getThreads={getThreads}
          setInteractingThread={setInteractingThread}
        />
      ))}
    </div>
  );
};

export default Feed;
