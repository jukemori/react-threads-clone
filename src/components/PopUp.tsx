import PopUpThread from "./PopUpThread";
import ThreadInput from "./ThreadInput";
import { ThreadType } from "./threadTypes";
import { User } from "./userTypes";

interface PopUpProps {
  user: User;
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  popUpFeedThreads: ThreadType[] | null;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  postThread: () => void;
}

const PopUp: React.FC<PopUpProps> = ({
  user,
  setOpenPopUp,
  popUpFeedThreads,
  text,
  setText,
  postThread,
}) => {
  return (
    <div className="popup">
      <p onClick={() => setOpenPopUp(false)}>X</p>
      {popUpFeedThreads?.map((popUpFeedThread) => (
        <PopUpThread
          key={popUpFeedThread.id}
          popUpFeedThread={popUpFeedThread}
        />
      ))}
      <ThreadInput
        user={user}
        text={text}
        setText={setText}
        postThread={postThread}
      />
    </div>
  );
};

export default PopUp;
