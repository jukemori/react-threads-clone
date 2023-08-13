import moment from "moment";
import { User } from "./userTypes";
import { ThreadType } from "./threadTypes";

interface PopUpThreadProps {
  user: User;
  popUpFeedThread: ThreadType;
}

const PopUpThread: React.FC<PopUpThreadProps> = ({ user, popUpFeedThread }) => {
  const threadTime = moment(popUpFeedThread.timestamp);
  const timePassed = threadTime.startOf("day").fromNow();
  return (
    <article className="feed-card">
      <div className="text-container">
        <div>
          <div className="img-container">
            <img src={user.img} alt="profile avatar" />
          </div>
          <div>
            <p>
              <strong>{user.handle}</strong>
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
