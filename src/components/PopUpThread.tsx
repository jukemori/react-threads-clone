import moment from "moment";
import { User } from "./userTypes";
import { ThreadType } from "./threadTypes";
import { useState, useEffect } from "react";

interface PopUpThreadProps {
  popUpFeedThread: ThreadType;
}

const PopUpThread: React.FC<PopUpThreadProps> = ({ popUpFeedThread }) => {
  const [user, setUser] = useState<User | null>(null);
  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?user_uuid=${popUpFeedThread.thread_from}`
      );
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log("popUpFeedThread", popUpFeedThread);

  const threadTime = moment(popUpFeedThread.timestamp);
  const timePassed = threadTime.startOf("day").fromNow();
  return (
    <article className="feed-card">
      <div className="text-container">
        <div>
          <div className="img-container">
            <img src={user?.img} alt="profile avatar" />
          </div>
          <div>
            <p>
              <strong>{user?.handle}</strong>
            </p>
            <p>{popUpFeedThread.text}</p>
          </div>
        </div>
        <p className="sub-text">{timePassed}</p>
      </div>
    </article>
  );
};

export default PopUpThread;
