import { Link, Text } from "@geist-ui/core";
import "../components/component.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div style={{ display: "flex", flexDirection: "row", gap: "30px", alignItems:"center" }}>
          <Link href="/" placeholder={"Home"}>
            <Text font="16px" b className="nav-text">Home</Text>
          </Link>
          <Link href="blogs" placeholder={"Blogs"}>
            <Text font="16px" b className="nav-text">Blogs</Text>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
