import { Container } from './styles'
// import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import CV from '../../assets/MuhammadRezaFarras_Mechanical_Engineer_Backend_Engineer_CV.pdf'
import {Button, ButtonProps} from '../../components/Components/Button/Button'

export function Header() {
  const [isActive, setActive] = useState(false)
  const [isSideBar, setSideBar] = useState(0)
  const [currentPth, setCurrPath] = useState("/")
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu(curr: number) {
    setActive(false)
    setCurrPath("/")
    setSideBar(curr)
  }

  let isShowBtn: boolean = isSideBar > 0;

  return (
    <Container className="header-fixed">
      {/* <Router> */}
        <div className='left-side'>
          {isShowBtn &&
          <Button buttonText={">"} className='button-side item'></Button>}
          <HashLink smooth to="#home" className="logo item">
            <span>Reneezme</span>
          </HashLink>
        </div>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to={currentPth+"#home"} onClick={() => closeMenu(0)}>
            Home
          </NavHashLink>
          <NavHashLink smooth to={currentPth+"#about"} onClick={() => closeMenu(0)}>
            About me
          </NavHashLink>
          <NavHashLink smooth to={currentPth+"#project"} onClick={() => closeMenu(0)}>
            Project
          </NavHashLink>
          <NavHashLink smooth to={currentPth+"#contact"} onClick={() => closeMenu(0)}>
            Contact
          </NavHashLink>
          <NavHashLink smooth to="algorithm" onClick={() => closeMenu(1)}>
            Algorithm
          </NavHashLink>
          <a href={CV} download className="button">
            CV
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      {/* </Router> */}
    </Container>
  )
}
