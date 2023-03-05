import classes from "./Header.module.css";
import Button from "../../UI/Button";

function Header(props) {
  function clickHandler() {
    window.scrollTo({
      top: 1300,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <header>
      <div className={classes.content}>
        <h4>Introducing</h4>
        <h1 className={classes.header__main}> Space Guide</h1>
        <h3>Centralizing space information for mankind</h3>
      </div>
      <Button onClick={clickHandler}> Explore </Button>
    </header>
  );
}

export default Header;
