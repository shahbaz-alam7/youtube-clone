import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import Channel from "./components/pages/Channel";
import VideoPage from "./components/pages/VideoPage";
import Subscription from "./components/pages/Subscription";
import Account from "./components/pages/Account";
import History from "./components/pages/History";
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
