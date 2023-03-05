import classes from "./Slide.module.css";

function Slide(props) {
  return (
    <div
      className={`${
        props.current === props.index ? classes.active : classes.slide
      }`}
    >
      <div className={classes.img_container}>
        <img className={classes.image} alt="" src={props.imageUrl}></img>
      </div>

      <div className={classes.text}>
        <h2 className={classes.title}>{props.title}</h2>
        <p className={classes.description}>{props.summary}</p>
        <p>- {props.newsSite}</p>
        <p>
          {new Date(props.date).toLocaleString("en-US").replaceAll(",", " -")}
        </p>
      </div>
    </div>
  );
}

export default Slide;
