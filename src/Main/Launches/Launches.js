import { useState, useEffect } from "react";
import classes from "./Launches.module.css";
import List from "./List";
import Content from "./Content";

function Launches(props) {
  //STATE
  const [launchData, SetLaunchData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [launch, setLaunch] = useState(0);

  // API FETCH
  useEffect(() => {
    const fetchLaunch = async function () {
      try {
        const res = await fetch(
          "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/"
        );
        const data = await res.json();

        const filteredData = data.results.map((item, index) => {
          if (!item) {
            return null;
          }
          return {
            index: index,
            id: item.id,
            img: item.image,
            name: item.name,
            servicer: item.launch_service_provider.name,
            missionDesc: item.mission.description,
            missionName: item.mission.name,
            missionType: item.mission.type,
            orbitType: item.mission.orbit.name,
            padName: item.pad.name,
            padLocation: item.pad.location.name,
            padImg: item.pad.map_image,
            padLat: item.pad.latitude,
            padLong: item.pad.longitude,
            statusName: item.status.name,
            statusAbb: item.status.abbrev,
            statusDesc: item.status.description,
            start: item.window_start,
          };
        });
        SetLaunchData(filteredData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLaunch();
  }, []);

  //style loading screen
  if (isLoading) {
    return (
      <section>
        {" "}
        <p> Loading...</p>
      </section>
    );
  }

  const list = launchData.map((data) => (
    <List
      key={data.id}
      index={data.index}
      loader={isLoading}
      launch={launch}
      setLaunch={setLaunch}
      servicer={data.servicer}
      name={data.name}
    />
  ));

  const content = launchData.map((data) => (
    <Content
      key={data.id}
      index={data.index}
      loader={isLoading}
      launch={launch}
      statusName={data.statusName}
      statusDesc={data.statusDesc}
      start={data.start}
      img={data.img}
      missionName={data.missionName}
    />
  ));
  //make a card component
  return (
    <section className={classes.launches}>
      <h1 className={classes.header}>Launches</h1>
      <div className={classes.wrapper}>
        <ul className={classes.list}>{list}</ul>
        <div className={classes.content}>{content}</div>
      </div>
    </section>
  );
}
export default Launches;
