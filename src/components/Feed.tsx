import Thread from "./Thread";
import { User } from "./userTypes";
import { ThreadType } from "./threadTypes";

interface FeedProps {
  user: User;
  filteredThreads: ThreadType[];
}

const Feed: React.FC<FeedProps> = ({ user, filteredThreads }) => {
  return (
    <div className="feed">
      {filteredThreads?.map((filteredThread) => (
        <Thread
          key={filteredThread.id}
          user={user}
          filteredThread={filteredThread}
        />
      ))}
    </div>
  );
};

export default Feed;
