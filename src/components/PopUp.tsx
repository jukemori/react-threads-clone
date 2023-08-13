import PopUpThread from "./PopUpThread";
import ThreadInput from "./ThreadInput";
import { ThreadType } from "./threadTypes";
import { User } from "./userTypes";

interface PopUpProps {
  user: User;
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  popUpFeedThreads: ThreadType[] | null;
}

const PopUp: React.FC<PopUpProps> = ({
  user,
  setOpenPopUp,
  popUpFeedThreads,
}) => {
  return (
    <div className="popup">
      <p onClick={() => setOpenPopUp(false)}>X</p>
      {popUpFeedThreads?.map((popUpFeedThread) => (
        <PopUpThread
          user={user}
          key={popUpFeedThread.id}
          popUpFeedThread={popUpFeedThread}
        />
      ))}
      <ThreadInput />
    </div>
  );
};

export default PopUp;
