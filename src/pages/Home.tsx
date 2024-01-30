import { Button, Card, Grid, Link, Page, Text, Tree } from "@geist-ui/core";
import "../pages/Home.css";
import React from "react";
import { ArrowUpRight } from "@geist-ui/icons";

function Home() {
  return (
    <>
      <div className="main-grid">
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
                    <Link target="_blank" href="https://github.com/ag-wnl/Clensify" placeholder={'project'} icon>Clensify</Link>
                  </Text>
                  <Text p font="14px" style={{color: '#c2c2c2'}}>
                    A profanity detection library which uses extensive
                    anti-bypass techniques and multi stage detection
                    outperforming conventional detection methods
                  </Text>
                </Card>
              </Grid>

              <Grid xs={6} md={8}>
                <Card shadow width="100%">
                  <Text h4 className="project-name">
                    <Link target="_blank" href="https://github.com/ag-wnl/readerai" placeholder={'project'} icon>ReaderAI</Link>
                  </Text>

                  <Text p font="14px" style={{color: '#c2c2c2'}}>
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
                    <Link target="_blank" href="https://github.com/ag-wnl/Clensify" placeholder={'project'} icon>Clensify</Link>
                  </Text>
                  <Text p font="14px" style={{color: '#c2c2c2'}}>
                    A profanity detection library which uses extensive
                    anti-bypass techniques and multi stage detection
                    outperforming conventional detection methods
                  </Text>
                </Card>
              </Grid>

              <Grid xs={6} md={8}>
                <Card shadow width="100%">
                  <Text h4 className="project-name">
                    <Link target="_blank" href="https://github.com/ag-wnl/readerai" placeholder={'project'} icon>ReaderAI</Link>
                  </Text>

                  <Text p font="14px" style={{color: '#c2c2c2'}}>
                    Helps you annotate/take notes across the web seamlessly in a
                    new way, answer prompts and everything just a click away!
                  </Text>
                </Card>
              </Grid>
            </Grid.Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
