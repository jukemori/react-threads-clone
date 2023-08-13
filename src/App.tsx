import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { User } from "./components/userTypes";
import { ThreadType } from "./components/threadTypes";
import PopUp from "./components/PopUp";
import WriteIcon from "./components/WriteIcon";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const [viewThreadsFeed, setViewThreadsFeed] = useState(true);
  const [filteredThreads, setFilteredThreads] = useState<ThreadType[]>([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [interactingThread, setInteractingThread] = useState<ThreadType | null>(
    null
  );
  const [popUpFeedThreads, setPopUpFeedThreads] = useState<ThreadType[]>([]);
  const [text, setText] = useState("");

  const userId = "ca39d69f-e237-4bb9-863c-80f7af74bd17";

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?user_uuid=${userId}`
      );
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getThreads = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/threads?thread_from=${userId}`
      );
      const data = await response.json();
      setThreads(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getThreadsFeed = () => {
    if (threads.length > 0) {
      if (viewThreadsFeed) {
        const standAloneThreads = threads.filter(
          (thread) => thread.reply_to === null
        );
        setFilteredThreads(standAloneThreads);
      }

      if (!viewThreadsFeed) {
        const replyThreads = threads.filter(
          (thread) => thread.reply_to !== null
        );
        setFilteredThreads(replyThreads);
      }
    }
  };

  const getReplies = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/threads?reply_to=${interactingThread?.id}`
      );
      const data = await response.json();
      setPopUpFeedThreads(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postThread = async () => {
    const thread = {
      timestamp: new Date(),
      thread_from: user?.user_uuid,
      thread_to: user?.user_uuid || null,
      reply_to: interactingThread?.id || null,
      text: text,
      likes: [],
    };

    try {
      const response = await fetch("http://localhost:3000/threads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(thread),
      });
      const result = await response.json();
      console.log("result", result);
      getThreads();
      getReplies();
      setText("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReplies();
  }, [interactingThread]);

  useEffect(() => {
    getUser();
    getThreads();
  }, []);

  useEffect(() => {
    getThreadsFeed();
  }, [user, threads, viewThreadsFeed]);

  const handleClick = () => {
    setPopUpFeedThreads([]);
    setInteractingThread(null);
    setOpenPopUp(true);
  };

  return (
    <>
      {user && (
        <div className="app">
          <Nav url={(user as { instagram_url: string }).instagram_url} />
          <Header
            user={user}
            viewThreadsFeed={viewThreadsFeed}
            setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
            user={user}
            filteredThreads={filteredThreads}
            setOpenPopUp={setOpenPopUp}
            getThreads={getThreads}
            setInteractingThread={setInteractingThread}
          />
          {openPopUp && (
            <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
              popUpFeedThreads={popUpFeedThreads}
              text={text}
              setText={setText}
              postThread={postThread}
            />
          )}
          <div onClick={handleClick}>
            <WriteIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
