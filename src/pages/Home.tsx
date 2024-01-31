import { Button, Card, Grid, Link, Page, Text, Tree } from "@geist-ui/core";
import "../pages/Home.css";
import React from "react";
import { Linkedin, Github } from "@geist-ui/icons";
import cf_icon from '../imgs/cf.png';

function Home() {
  return (
    <>
      <div className="main-grid">
        <div className="body-right">
          <Text h1 className="home-top-panel">
            <div style={{display:"flex", flexDirection:"column"}}>
              <span className="gradient-text-one">Hi, I'm</span>
              <span className="gradient-text">Agnideep Ghosh</span>
            </div>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/agnideep/"
                placeholder={"LinkedIn"}
              >
                <Linkedin size={32} color="#3e6ed6" />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/ag-wnl"
                placeholder={"GitHub"}
              >
                <Github size={32} color="black" />
              </Link>
              <Link
                target="_blank"
                href="https://codeforces.com/profile/ag_wnl"
                placeholder={"CodeForces"}
              >
                <img src={cf_icon} />
              </Link>
            </span>
          </Text>
          <Text p>
            <Text b>Developing something useful. </Text>
            Engineering undergraduate at MAIT class of 2025.
          </Text>

          <Text p>
            I love developing projects aimed to solve a problem or try to find a
            way to solve it more efficiently. I have a deep interest in solving
            data structure and algorithm problems and take part in competitive
            programming.
          </Text>
          <br></br>

          <div className="projects-preview-box">
            <Text h5>Some projects that I've been working on:</Text>

            <Grid.Container className="grid-container" gap={4} justify="center">
              <Grid xs={6} md={8}>
                <Card className="project-card" shadow width="100%">
                  <Text h4 className="project-name">
                    <Link
                      target="_blank"
                      href="https://github.com/ag-wnl/Clensify"
                      placeholder={"project"}
                      icon
                    >
                      Clensify
                    </Link>
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
                    <Link
                      target="_blank"
                      href="https://github.com/ag-wnl/readerai"
                      placeholder={"project"}
                      icon
                    >
                      ReaderAI
                    </Link>
                  </Text>

                  <Text p font="14px">
                    Helps you annotate/take notes across the web seamlessly in a
                    new way, answer prompts and everything just a click away!
                  </Text>
                </Card>
              </Grid>
            </Grid.Container>

            <Grid.Container className="grid-container" gap={4} justify="center">
              <Grid xs={6} md={8}>
                <Card shadow width="100%">
                  <Text h4 className="project-name">
                    <Link
                      target="_blank"
                      href="https://github.com/ag-wnl/Clensify"
                      placeholder={"project"}
                      icon
                    >
                      Hashnot
                    </Link>
                  </Text>
                  <Text p font="14px">
                    Developing a platform which helps connect developers across the world, helping them build together! Uses a React frontend, Node.js and MySQL database in the backend.
                  </Text>
                </Card>
              </Grid>

              <Grid xs={6} md={8}>
                <Card shadow width="100%">
                  <Text h4 className="project-name">
                    <Link
                      target="_blank"
                      href="https://github.com/ag-wnl/readerai"
                      placeholder={"project"}
                      icon
                    >
                      sneaktreat
                    </Link>
                  </Text>

                  <Text p font="14px">
                    An online sneaker and apparel marketplace. Fullstack web-application with integrated payment gateway and
                  </Text>
                </Card>
              </Grid>
            </Grid.Container>
          </div>
          <span style={{marginTop:"10rem"}}>
            <Text h1>Get in touch</Text>
            <Text h4>I would be happy to further discuss my experiences with you, simply shoot me an email at 
            <span style={{color:"#1e6fd9"}}> agnideep22@gmail.com</span> or message me on <Link target="_blank"
                      href="https://www.linkedin.com/in/agnideep/"
                      placeholder={"LinkedIn"} underline color>LinkedIn</Link>!</Text>
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
