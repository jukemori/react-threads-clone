import Thread from "./Thread";
import { User } from "./userTypes";
import { ThreadType } from "./threadTypes";

interface FeedProps {
  user: User;
  filteredThreads: ThreadType[];
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Feed: React.FC<FeedProps> = ({ user, filteredThreads, setOpenPopUp }) => {
  return (
    <div className="feed">
      {filteredThreads?.map((filteredThread) => (
        <Thread
          key={filteredThread.id}
          user={user}
          filteredThread={filteredThread}
          setOpenPopUp={setOpenPopUp}
        />
      ))}
    </div>
  );
};

export default Feed;
