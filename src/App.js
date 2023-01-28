import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Channel from "./components/pages/Channel";
import VideoPage from "./components/pages/VideoPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/main" replace />} />
            <Route path="/main" element={<Main />} />
            <Route path="/channel/:id" element={<Channel />} />
            <Route path="/home" element={<Home />} />
            <Route path="/video/:id/:channelId" element={<VideoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
