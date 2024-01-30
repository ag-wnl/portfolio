import { Button, Card, Grid, Page, Text, Tree } from "@geist-ui/core";
import "../pages/Home.css";
import React from "react";
import { ArrowUpRight } from "@geist-ui/icons";
import FooterBody from "../components/FooterBody";

function Home() {
  return (
    <>
      <div className="main-grid">
        <div className="file-directory">
          <Tree>
            <Tree.File name="package.json" />
            <Tree.Folder name="components">
              <Tree.File name="layout.js" />
              <Tree.Folder name="footer">
                <Tree.File name="footer.js" />
                <Tree.File name="footer-text.js" />
                <Tree.File name="footer-license.js" />
              </Tree.Folder>
              <Tree.File name="header.js" />
            </Tree.Folder>
            <Tree.File name="readme.md" />
          </Tree>
        </div>

        <div className="body-right">
          <Text h5 font="22px">
            Agnideep Ghosh
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

          <div className="projects-preview-box">
            <Text h4>Some projects that I've been working on:</Text>

            <Grid.Container
              className="grid-container"
              gap={2}
              justify="center"
              height="220px"
            >
              <Grid xs={6} md={8}>
                <Card className="project-card" shadow width="100%">
                  <Text h4 className="project-name">
                    Clensify <ArrowUpRight color="grey" />{" "}
                  </Text>
                  <Text p font="14px">
                    A profanity detection library which uses extensive
                    anti-bypass techniques and multi stage detection
                    outperforming conventional detection methods
                  </Text>
                </Card>
              </Grid>

              <Grid xs={6} md={8}>
                <Card shadow width="100%">
                  <Text h4 className="project-name">
                    ReaderAI <ArrowUpRight color="grey" />{" "}
                  </Text>

                  <Text p font="14px">
                    Helps you annotate/take notes across the web seamlessly in a
                    new way, answer prompts and everything just a click away!
                  </Text>
                </Card>
              </Grid>
            </Grid.Container>

            <Grid.Container
              className="grid-container"
              gap={2}
              justify="center"
              height="220px"
            >
              <Grid xs={6} md={8}>
                <Card shadow width="100%">
                  <Text h4 className="project-name">
                    Clensify <ArrowUpRight color="grey" />{" "}
                  </Text>
                  <Text p font="14px">
                    A profanity detection library which uses extensive
                    anti-bypass techniques and multi stage detection
                    outperforming conventional detection methods
                  </Text>
                </Card>
              </Grid>

              <Grid xs={6} md={8}>
                <Card shadow width="100%">
                  <Text h4 className="project-name">
                    ReaderAI <ArrowUpRight color="grey" />{" "}
                  </Text>

                  <Text p font="14px">
                    Helps you annotate/take notes across the web seamlessly in a
                    new way, answer prompts and everything just a click away!
                  </Text>
                </Card>
              </Grid>
            </Grid.Container>
          </div>
        </div>
      </div>

      <FooterBody />
    </>
  );
}

export default Home;
