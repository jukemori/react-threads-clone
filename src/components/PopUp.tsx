import PopUpThread from "./PopUpThread";
import ThreadInput from "./ThreadInput";
import { ThreadType } from "./threadTypes";

interface PopUpProps {
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  popUpFeedThreads: ThreadType[] | null;
}

const PopUp: React.FC<PopUpProps> = ({ setOpenPopUp, popUpFeedThreads }) => {
  return (
    <div className="popup">
      <p onClick={() => setOpenPopUp(false)}>X</p>
      {popUpFeedThreads?.map((popUpFeedThread) => (
        <PopUpThread
          key={popUpFeedThread.id}
          popUpFeedThread={popUpFeedThread}
        />
      ))}
      <ThreadInput />
    </div>
  );
};

export default PopUp;
