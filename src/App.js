import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import Account from "./components/pages/Account";
import Channel from "./components/pages/Channel";
import Subscription from "./components/pages/Subscription";

import History from "./components/pages/History";
import VideoPage from "./components/pages/VideoPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/main" replace />} />
            <Route path="/main" element={<Main />} />
            <Route path="/video/:id/:channelId" element={<VideoPage />} />
            <Route path="/channel/:id" element={<Channel />} />
            <Route path="/account" element={<Account />} />
            <Route path="/history" element={<History />} />
            <Route path="/subscription" element={<Subscription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
