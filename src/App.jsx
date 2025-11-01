import React from "react";
function App() {
  return (
    <div className="bg-white h-screen w-full">
      <h1 className="text-3xl font-bold underline text-center text-gray-800">
        Hello world!
      </h1>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
    </div>
  );
}

export default App;
