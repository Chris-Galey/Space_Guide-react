import classes from "./Main.module.css";
import Header from "./Header/Header";
import News from "./News/News";
import Launches from "./Launches/Launches";

function Main() {
  return (
    <main className={classes.main}>
      <Header />
      <News />
      <Launches />
    </main>
  );
}

export default Main;
