import React from 'react'
import { Link } from 'react-router-dom';
const NavComponent = () => {
  return (
    <div
        style={{
            backgroundColor: "black",
            padding: "10px 30px"
        }}>
        <ul
        style={{
            display: "flex",
            gap: "30px",
            listStyle:"none",
            color:"#0047ff"
        }}>
            <li>
                <Link
                style={{
                    color:"white",
                    textDecoration:"none"
                }}
                to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link
                style={{
                    color:"white",
                    textDecoration:"none"
                }}
                to="/About">
                    About
                </Link>
            </li>
        </ul>
    </div>
  )
}
export default NavComponent;












