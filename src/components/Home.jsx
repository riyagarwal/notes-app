import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const pasteId = searchParams.get("pasteId");

  const createPaste = () => {
    // add details of the paste to an object
    const paste = {
      title: title,
      content: content,
      _id: pasteId || Date.now().toString(36), // used for Short unique strings (e.g., unique IDs,)
      createdAt: new Date().toISOString(),
    };

    // update the pasteSlice
    if (pasteId) {
      // update paste
      dispatch(updateToPastes(paste));
    } else {
      // create paste
      dispatch(addToPastes(paste));
    }

    //can reset the title, content and search parameters after the paste is saved in redux
    setTitle("");
    setContent("");
    setSearchParams({});
  };

  return (
    <>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 mt-2 rounded-lg border border-b-amber-600 w-[60%] pl-4"
        />
        <button onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4 border"
          value={content}
          placeholder="Enter content here"
          onChange={(e) => setContent(e.target.value)}
          rows={20}
        />
      </div>
    </>
  );
};

export default Home;
