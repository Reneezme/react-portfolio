import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import eds from "../../assets/eds-project.png"
import sfa from "../../assets/sfa-project.png"
import ScrollAnimation from "react-animate-on-scroll";
import externalArrow from "../../assets/external-link.svg"


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects (so far)</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://nabati.epc-dev.nabatisnack.co.id:8100/eds/" target="_blank" rel="noreferrer">
                  <img src={externalArrow} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>EDS - Sales Module</h3>
              <p>
              This website handle every sales activity like taking order, shipment, billing, collection and handle master data for salesman, product and customer sales. This module also handle logistics such as stock, inventory, storage location and swap handling.
              </p>
              <img className= "project-pic"
              src={eds} 
              alt="Visit site" />
            </div>
            <footer>
              <ul className="tech-list">
                <li>go</li>
                <li>rabbitMQ</li>
                <li>redis</li>
                <li>mySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://nabati.epc-dev.nabatisnack.co.id:8100/eds/" target="_blank" rel="noreferrer">
                  <img src={externalArrow} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SFA - Sales Force App</h3>
              <p>
              This mobile app handle field activity for salesman, driver, head warehouse and area sales supervisor. Beatifully tailored to fulfill sales activity with high performance backend service. Much time faster than current nabati SFA inhouse app.
              </p>
              <img className= "project-pic"
              src={sfa} 
              alt="Visit site" />
            </div>
            <footer>
              <ul className="tech-list">
                <li>go</li>
                <li>rabbitMQ</li>
                <li>redis</li>
                <li>mySQL</li>
                <li>postgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}