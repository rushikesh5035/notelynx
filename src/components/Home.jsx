import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToNotes, updateToNotes } from "../redux/notesSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const notesId = searchParams.get("notesId");
  const dispatch = useDispatch();

  const handleCreateNote = () => {
    const note = {
      title: title,
      content: value,
      _id: notesId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    // Provide note to reducer
    if (notesId) dispatch(updateToNotes(note));
    else dispatch(addToNotes(note));

    // after creation
    setTitle("");
    setValue("");
    setSearchParams({});
  };

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-1 rounded  mt-2 w-[70%] bg-gray-100 pl-4"
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="p-3 rounded  mt-5 bg-slate-100"
          onClick={handleCreateNote}
        >
          {notesId ? "Update Note" : "Create New Note"}
        </button>
      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl min-w-[500px] p-4  bg-gray-100"
          value={value}
          placeholder="enter content here"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
