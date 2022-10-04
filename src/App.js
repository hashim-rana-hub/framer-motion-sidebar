import Home from "./components/home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";
import Message from './components/Message'
import Analytics from "./components/amalytics/Analytics";
function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/message" element={<Message />} />
            <Route exact path="/analytics" element={<Analytics />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
