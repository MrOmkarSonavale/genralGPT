import React from "react";
import SideBar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import ChatBox from './components/ChatBox';
import Credit from './pages/Credits';

import Community from './pages/Community';

const App = () => {
  return (
    <>
      <div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white">
        <div className="flex h-screen w-screen">

          <SideBar />
          <Routes >
            <Route path="/" element={<ChatBox />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/community" element={<Community />} />
          </Routes >
        </div>
      </div>
    </>
  );
}

export default App;