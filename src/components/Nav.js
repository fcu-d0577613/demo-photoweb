import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/demo-photoweb">Home</Link>
          </li>
          {/* <li>
            <Link to="/About">About</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
