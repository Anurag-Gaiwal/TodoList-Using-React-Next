"use client"
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  let renderTask = <h1 className="font-bold text-2xl">No task available</h1>;
  
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className="flex justify-between items-center mb-8">
        <div className="flex justify-between mb-5 w-2/3 items-center">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-2xl font-semibold">{t.desc}</h6>
        </div>
        <button
          onClick={() => {
            deleteHandler(i);
          }}
          className="text-white bg-red-400 rounded font-bold px-3 py-2"
        >
          Delete
        </button>
      </li>
    ));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  return (
    <>
    <html>
      <head>
        <link rel="manifest" href="app/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
    </html>
    <div className="flex flex-col min-h-screen">
      <h1 className="text-red p-5 text-xl text-center bg-black text-white font-bold">
        Anurag Todo list
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          className="px-4 py-3 border-black rounded-lg m-5 border-4 text-2xl"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="px-4 py-3 border-black rounded-lg m-5 border-4 text-2xl"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white font-bold rounded-lg p-4 mb-3">
          Add task
        </button>
      </form>
      <hr className=""/>
      <div className="flex-grow p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
      <footer className="bg-black text-white font-bold p-5 py-4 text-center">
        Made with React and love
      </footer>
    </div>
    </>
  );
};

export default Page;
