import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, GeistProvider, Link, Themes, Tree, useToasts } from "@geist-ui/core";
import Home from "./pages/Home";
import "./App.css";
import Blogs from "./pages/Blogs";
import path from "path/posix";
import Editor from "./pages/editor";


function App() {
  const myTheme1 = Themes.createFromDark({
    type: "myTheme",
    palette: {
      success: "#000",
    },
  });

  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };


  return (
    <GeistProvider themes={[myTheme1]} themeType={themeType}>
      <CssBaseline />
      <div className="main-divider-div">
        
        <div className="file-directory">
          <Tree>
            <Tree.File name="package.json" />
            <Tree.Folder name="components" extra= '2 files'>
              <Link href="/" placeholder={'Home'}><Tree.File name="Home.tsx" /></Link>
              <Link href="blogs" placeholder={'Blogs'}><Tree.File name="Blogs.tsx" /></Link>
            </Tree.Folder>
            <Tree.File name="readme.md" />
          </Tree>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/editor' element={<Editor />} />
        </Routes>
      </div>
    </GeistProvider>
  );
}

export default App;
