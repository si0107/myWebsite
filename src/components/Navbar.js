import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    const changeMenu = () => {
      setToggleMenu(false)
    }

    window.addEventListener('resize', changeMenu)

  }, [])

  const navigate = useNavigate();

  const redirectPage = (path) => {
    navigate(path);
    window.location.reload(false);
  };

  return (
    <div className='navbar-container'>
      <nav className='navbar'>
          <li className='list' id='home'>SI</li>
          { (toggleMenu || (screenWidth > 530)) && (
          <ul className='list'>
            <li className='nav-items' onClick={() => redirectPage("/Contact")} >Contact</li>
            <li className='nav-items' onClick={() => redirectPage("/References")}>References</li>
            <li className='nav-items' onClick={() => redirectPage("/Projects")}>Projects</li>
            <li className='nav-items' onClick={() => redirectPage("/")} >About</li>
          </ul>
          )}

        <button onClick = {toggleNav} className='drop-menu'>≡</button>
      </nav>
    </div>
  )
}

export default Navbar