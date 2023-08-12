import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PopUp from "./components/PopUp";

const App = () => {
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <>
      {user && (
        <div className="app">
          <Nav url={user.instagram_url} />
          <Header />
          <Feed />
          {/* <PopUp /> */}
        </div>
      )}
    </>
  );
};

export default App;
