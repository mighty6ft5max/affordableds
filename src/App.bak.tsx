import React from "react";
import { Box, Grid, withStyles } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import "./App.css";
const styles = (theme: Theme) =>
  createStyles({
    background: {
      minHeight: "100vh",
      minWidth: "100vw",
    },
    banner: {
      background: "white",
      height: 150,
      width: "100%",
    },
    body: {
      minHeight: "calc(100vh - 250px)",
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
    video_holder: {
      width: "100%",
      height: "100%",
      maxHeight: 350,
      overflow: "hidden",
    },
  });
interface Props {
  classes: any;
}
const App: React.FC<Props> = (props) => {
  const { classes } = props;
  return (
    <Grid container classes={{ root: classes.background }}>
      <Grid classes={{ root: classes.body }} item xs={12}>
        <Grid classes={{ root: classes.inner }} container>
          <Grid classes={{ root: classes.header }} item>
            <Box className={classes.video_holder}>
              <video
                className="video_bg"
                autoPlay={true}
                loop={true}
                muted={true}
              >
                <source
                  src="https://res.cloudinary.com/defendhaiti/video/upload/v1597600350/SiteGraphics/orlando.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>
          </Grid>
          <Grid classes={{ root: classes.banner }} item></Grid>
          <Grid classes={{ root: classes.content }} item></Grid>
        </Grid>
      </Grid>
      <Grid classes={{ root: classes.footer }} item xs={12}></Grid>
    </Grid>
  );
};

export default withStyles(styles)(App);
