import { Text } from "@geist-ui/core";
import "../pages/Home.css";

function Blogs() {
  return (
    <>
      <div className="main-grid">
        <div className="body-right">
          <Text h2>
            Blogs
          </Text>
          <Text p>
            <Text b>Yes, I <span style={{color:"brown"}}>blog</span> sometimes. </Text>
            I love to share my learnings and experiences via blogs and will be linking them here soon
          </Text>

          <br></br>
        </div>
      </div>
    </>
  );
}

export default Blogs;
