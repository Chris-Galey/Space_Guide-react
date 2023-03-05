import { useState, useEffect } from "react";
import classes from "./News.module.css";
import Slide from "./Slide";
import Button from "../../UI/Button";
function News(props) {
  const [newsData, setNewsData] = useState(0);
  const [current, setCurrent] = useState(0);
  console.log(newsData);
  //fetch api
  useEffect(() => {
    const fetchData = async function () {
      try {
        const res = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles/"
        );
        const data = await res.json();
        setNewsData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //helper functions
  const length = 10;
  console.log();
  function nextSlideHandler() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlideHandler() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (newsData <= 0) {
    return null;
  }

  return (
    <section className={classes.news}>
      <h1 className={classes.section__header}>News</h1>
      <div className={classes.slideshow}>
        {newsData.map((item, index) => (
          <Slide
            key={item.id}
            index={index}
            current={current}
            imageUrl={item.imageUrl}
            title={item.title}
            summary={item.summary}
            newsSite={item.newsSite}
            date={item.publishedAt}
          />
        ))}
      </div>
      <div className={classes.buttons}>
        <Button onClick={prevSlideHandler}>Prev</Button>
        <Button onClick={nextSlideHandler}>Next</Button>
      </div>
    </section>
  );
}
export default News;
