import PopUpThread from "./PopUpThread";
import ThreadInput from "./ThreadInput";
import { User } from "./userTypes";

interface PopUpProps {
  user: User;
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp: React.FC<PopUpProps> = ({ user, setOpenPopUp }) => {
  return (
    <div className="popup">
      <p onClick={() => setOpenPopUp(false)}>X</p>
      <PopUpThread />
      <ThreadInput />
    </div>
  );
};

export default PopUp;
