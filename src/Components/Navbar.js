import React, { useState } from "react";

function Navbar() {
  // set the drawer state
  const [open, setOpen] = useState(false);

  // handle the drawer button
  const hadleOpen = () => setOpen(!open);

  return (
    <div>
      <nav>
        <div className="logo">React Nav</div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <a href="##">Home</a>
          </li>
          <li>
            <a href="##">Products</a>
          </li>
          <li>
            <a href="##">Services</a>
          </li>
          <li>
            <a href="##">About</a>
          </li>
          <li>
            <a href="##">Contact</a>
          </li>
        </ul>
        <i
          onClick={hadleOpen}
          className={open ? "fas fa-stream burger" : "fas fa-bars burger"}
        ></i>
      </nav>
    </div>
  );
}

export default Navbar;
