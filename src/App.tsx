import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import Body from "./Body";
import "./App.css";
const styles = (theme: Theme) =>
  createStyles({
    background: {
      minHeight: "100vh",
      width: "100vw",
      overflow: "hidden",
    },
    banner: {
      background: "white",
      height: 150,
      width: "100%",
    },
    body: {
      background:
        "linear-gradient(rgba(45, 73, 81,.65) 5%, rgba(45, 73, 81,1) 85%)",
    },
    content: {
      background:
        "url('https://res.cloudinary.com/defendhaiti/image/upload/v1597592111/SiteGraphics/body_default.jpg')",
      backgroundSize: "cover",
      minHeight: 650,
      width: "100%",
    },
    footer: {
      background: "linear-gradient(rgb(56 47 38 / 0%),#382f26 50%)",
      height: 500,
      marginTop: -250,
    },
    header: {
      height: 350,
      width: "100%",
    },
    video_bg: {
      width: "auto",
      height: "100%",
    },
    video_bg_holder: {
      overflow: "hidden",
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: -1,
    },
  });
interface Props {
  classes: any;
}
const App: React.FC<Props> = (props) => {
  const [backgroundDimensions, setBackgroundDimensions] = useState({});
  const { classes } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  // const setSpeed = () => {
  //   if (videoRef) videoRef.current.playbackRate = 0.1;
  // };

  useEffect(() => {
    const width = videoRef?.current?.getBoundingClientRect().width;
    const height = videoRef?.current?.getBoundingClientRect().width;
    if (width && height) {
      const transform = `translate(${-(width - window.innerWidth) / 2}px, ${
        (height - window.innerHeight) / 2
      })`;
      setBackgroundDimensions({ transform });
    }
  }, [videoRef]);
  return (
    <div className={classes.background}>
      <div className={classes.video_bg_holder}>
        <video
          className={classNames(classes.video_bg)}
          autoPlay={true}
          loop={true}
          muted={true}
          // onCanPlay={() => setSpeed()}
          style={backgroundDimensions}
          ref={videoRef}
        >
          <source
            src="https://res.cloudinary.com/defendhaiti/video/upload/v1597600350/SiteGraphics/orlando.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={classNames(classes.body, classes.background)}>
        <Body />
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
