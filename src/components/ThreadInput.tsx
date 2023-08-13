import { User } from "./userTypes";

interface ThreadInputProps {
  user: User;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  postThread: () => void;
}

const ThreadInput: React.FC<ThreadInputProps> = ({
  user,
  text,
  setText,
  postThread,
}) => {
  return (
    <>
      <p>{user.handle}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button className="primary" onClick={postThread}>
        Post
      </button>
    </>
  );
};

export default ThreadInput;
