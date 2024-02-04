import { Routes, Route } from "react-router-dom";
import {
  CssBaseline,
  GeistProvider,
  Link,
  Themes,
  Tree,
} from "@geist-ui/core";
import Home from "./pages/Home";
import "./App.css";
import Blogs from "./pages/Blogs";
import FooterBody from "./components/FooterBody";
import Navbar from "./components/Navbar";

function App() {
  const myTheme1 = Themes.createFromLight({
    type: "myTheme",
    palette: {
      success: "#3291ff",
      background: "white",
    },
  });

  // const [themeType, setThemeType] = useState("light");
  // const switchThemes = () => {
  //   setThemeType((last) => (last === "light" ? "dark" : "light"));
  // };

  return (
    <GeistProvider themes={[myTheme1]} themeType={"light"}>
      <CssBaseline />
      <div className='parent-box'>
        <div className="navbar-header">
          <Navbar / >
        </div>
    
        <div className="main-divider-div">
          <div className="file-directory">
            <Tree>
              <Tree.Folder name="components" extra="1 file">
                <Link href="blogs" placeholder={"Blogs"}>
                  <Tree.File name="Blogs.tsx" />
                </Link>
              </Tree.Folder>
              <Link href="/" placeholder={"Home"}><Tree.File name="readme.md" /></Link>
            </Tree>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      </div>
      <FooterBody />
    </GeistProvider>
  );
}

export default App;
