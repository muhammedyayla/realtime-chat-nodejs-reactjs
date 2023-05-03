import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  // if the user doesn't exist return auth page
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
      // if the user exist return chats page

    return <ChatsPage user={user} />;
  }
}
 
export default App;