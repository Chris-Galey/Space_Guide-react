import classes from "./List.module.css";
import Card from "../../UI/Card";

const List = (props) => {
  function clickHandler() {
    props.setLaunch(props.index);
  }
  return (
    <Card>
      <li
        className={classes.item}
        key={props.id}
        index={props.index}
        onClick={clickHandler}
      >
        <div className={classes.number}>{props.index + 1}</div>
        <div className={classes.text}>
          <div className={classes.servicer}>{props.servicer}</div>
          <div className={classes.name}>{props.name}</div>
        </div>
      </li>
    </Card>
  );
};

export default List;
