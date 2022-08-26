import { useState } from 'react'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav>
      <div id='brand'>L.R.N</div>
      <div id="nav-menu">
        <span onClick={() => setShowMenu(!showMenu)} className="mobile-menu">
          Menu
        </span>
        <ul className={`${showMenu ? "active" : "hide"}`}>
          <li onClick={() => setShowMenu(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#about">About Me</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar