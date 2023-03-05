import classes from "./Nav.module.css";
import { useState, useEffect } from "react";
function Nav(props) {
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      setScrollY(window.scrollY);
      setScrolling(window.scrollY >= scrollY);
    };
    setTimeout(() => {
      setScrolling(scrolling === false && scrollY > 0);
    }, 3000);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <nav
      className={`${classes.nav} ${scrolling === false ? classes.active : ""}`}
    >
      <h3 className={classes.nav__header}>
        Space Guide <span className={classes.react}>Powered with React</span>
      </h3>
      <ul>
        <li>
          <div className={classes.nav__icon}></div>
          <a href="https://example.com">Home</a>
        </li>
        <li>
          <div className={classes.nav__icon}></div>
          <a href="https://example.com">News</a>
        </li>
        <li>
          <div className={classes.nav__icon}></div>
          <a href="https://example.com">Flights</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
