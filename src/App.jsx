import { RouterProvider } from "react-router-dom";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import ViewNotes from "./components/ViewNotes";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<ViewNotes />} />
      </Routes>
    </div>
  );
}

export default App;
