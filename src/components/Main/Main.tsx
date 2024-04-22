import Particles from "react-tsparticles"
import { Container } from "./styles"
import { Hero } from "../Hero/Hero"
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

import go from "../../assets/golang-1.svg";
import mysql from "../../assets/mysql-logo.svg";
import postgre from "../../assets/postgresql.svg";
import mongo from "../../assets/mongodb-icon-1.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import redis from "../../assets/redis.svg";
import rabbit from "../../assets/rabbitmq.svg";
import docker from "../../assets/docker-4.svg";
import git from "../../assets/gitea.svg";
import grafana from "../../assets/grafana.svg";

export function Main() {
  return (

    <Container>
      <Particles
        id="tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 2
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 20,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": go,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": grafana,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": redis,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": postgre,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": mysql,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": rabbit,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": docker,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": git,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": mongo,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": vscodeIcon,
                  "width": 20,
                  "height": 20
                }

              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}