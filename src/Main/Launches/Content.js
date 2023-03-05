import classes from "./Content.module.css";

const Content = (props) => {
  return (
    <div
      className={`${classes.launch} ${
        props.launch === props.index ? classes.active : ""
      }`}
    >
      <div className={classes.text}>
        <h3 className={classes.sub_header}>{props.missionName}</h3>
        <ul className={classes.list}>
          <li className={classes.item}>
            <p>{props.statusName}</p>
          </li>

          <li className={classes.item}>
            <p>{props.statusDesc}</p>
          </li>
          <li className={classes.item}>
            <p>{props.start}</p>
          </li>
        </ul>
      </div>

      <div className={classes.image_container}>
        <img className={classes.image} src={props.img} alt=""></img>
      </div>
    </div>
  );
};

export default Content;
