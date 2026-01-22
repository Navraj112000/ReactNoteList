import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Title, setTitle] = useState("");
  let [Desc, setDesc] = useState("");
  let [NotesCollection, setNotesCollection] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!Title == "" && !Desc == "") {
      let note = [...NotesCollection];
      note.push({
        Title,
        Desc,
      });
      setNotesCollection(note);
      setDesc("");
      setTitle("");
    }
  };

  let deletetask = (e) => {
    let note = [...NotesCollection];
    note.splice(e, 1);
    setNotesCollection(note);
  };

  return (
    <>
      <div className="bg-gray-500 text-white p-4 md:flex h-dvh">
        <div className="md:w-1/3 flex items-center  bg-gray-700 flex-col p-4 bg-black rounded-2xl">
          <h1 className="font-bold text-4xl h-1/5 my-4">Add Note</h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <input
              className="px-3 py-3 my-1 bg-gray-800 border-amber-50 border-2 rounded-xl"
              type="text"
              value={Title}
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              type="text"
              className="px-3 py-3 my-1 bg-gray-800 border-amber-50 border-2 rounded-2xl"
              value={Desc}
              placeholder="Enter Description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <button
              className="px-3 py-3 my-3 bg-gray-100 text-black font-semibold border-0 rounded-2xl active:scale-95"
              type="submit"
            >
              Add Note
            </button>
          </form>
        </div>
        <div className="p-4 md:w-2/3 h-full overflow-auto flex flex-wrap">
          {NotesCollection.map((note, idx) => {
            return (
              <div
                id={idx}
                className="p-4 w-45 h-63  bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover text-black  m-4 rounded-2xl flex flex-col shrink-0"
              >
                <div className="flex-1">
                  <h1 className="text-2xl font-bold py-3 text-wrap ">
                    {note.Title}
                  </h1>
                  <p className="w-full break-all">{note.Desc}</p>
                </div>
                <button
                  className="bg-red-400 px-2 py-1 rounded-xl "
                  onClick={() => deletetask(idx)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
