import react from "react";
import { Text } from "@geist-ui/core";
import "../pages/Home.css";

function Blogs() {
  return (
    <>
      <div className="main-grid">
        <div className="body-right">
          <Text h5 font="22px">
            Blogs
          </Text>
          <Text p>
            <Text b>Developing something useful. </Text>
            Engineering undergraduate at MAIT class of 2025.
          </Text>

          <Text p>
            I love developing projects aimed to solve a problem or try to find a
            way to solve it more efficiently. I have a deep interest in
            data-structure and algorithm problems and take part in competitive
            programming.
          </Text>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Blogs;
