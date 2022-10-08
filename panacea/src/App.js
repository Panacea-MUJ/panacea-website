import React from "react";
import HighlightBlog from "./components/highlightblog";
import Navbar from "./components/navbar";
import Blog from "./components/blog";
import Load from "./components/load";
import Newsletter from "./components/newsletter";

function App() {
  return (
    <section>
    <div className="bg-black">
      <Navbar />
    </div>
    <div className="bg-black h-full">
      <HighlightBlog />
      <Blog />
      <Load/>
      <Newsletter/>
    </div>
    </section>
  );
}

export default App;
