import React from "react";
import HighlightBlog from "./components/highlightblog";
import Navbar from "./components/navbar";
import Blog from "./components/blog";

function App() {
  return (
    <section>
    <div className="bg-black">
      <Navbar />
    </div>
    <div className="bg-black h-full">
      <HighlightBlog />
      <Blog />
    </div>
    </section>
  );
}

export default App;
