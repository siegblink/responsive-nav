import React, { useState } from 'react'
import { Link } from '@reach/router'

function ResponsiveNavigation(props) {
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [navOpen, setNavOpen] = useState(false)
  const { navLinks, background } = props
  const { hoverBackground, linkColor, logo } = props

  return (
    <nav className='responsive-toolbar' style={{ background }}>
      <ul style={{ background }} className={navOpen ? 'active' : ''}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} height='40px' width='40px' alt='logo-nav-toggler' />
        </figure>

        {navLinks.map(function(navLink, index) {
          return (
            <li
              key={navLink.text}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              style={{
                background:
                  hoverIndex === index ? hoverBackground || '#999' : '',
              }}>
              <Link to={navLink.path} style={{ color: linkColor }}>
                <div>{navLink.text}</div>
                <i className={navLink.icon} />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ResponsiveNavigation
