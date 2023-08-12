import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { User } from "./components/userTypes";
import { Thread } from "./components/threadTypes";
import PopUp from "./components/PopUp";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [threads, setThreads] = useState<Thread[]>([]);
  const [viewThreadsFeed, setViewThreadsFeed] = useState(true);
  const [filteredThreads, setFilteredThreads] = useState<Thread[]>([]);

  const userId = "ca39d69f-e237-4bb9-863c-80f7af74bd17";

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?user_uuid=${userId}`
      );
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    getUser();
    getThreads();
  }, []);

  useEffect(() => {
    getThreadsFeed();
  }, [user, threads, viewThreadsFeed]);

  console.log(filteredThreads);

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
          <Feed />
          {/* <PopUp /> */}
        </div>
      )}
    </>
  );
};

export default App;
