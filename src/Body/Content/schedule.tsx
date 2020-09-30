import React, { useEffect } from "react";
import classNames from "classnames";
import { Button, ButtonGroup, Grid, withStyles } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";

const content_max_width = 960;

const styles = (theme: Theme) =>
  createStyles({
    biz_icon: {
      marginRight: 8,
    },
    biz_info: {
      color: "white",
      fontSize: ".9rem",
      lineHeight: 1.21,
      marginBottom: 8,
    },
    button: {
      background: theme.palette.success.main,
      color: "white",
    },
    content: {
      background: "white",
      borderRadius: "8px 8px 0 0",
      boxShadow: theme.shadows[4],
      padding: "48px 48px 135px",
      zIndex: 2,
      marginTop: -100,
      maxWidth: content_max_width,
      width: "100%",
    },
    hours: {
      "& td": {
        border: "none",
        color: "white",
        fontSize: "1.4rem",
      },
    },
    name: {
      width: "100%",
    },
    green: {
      color: theme.palette.success.light,
    },
    red: {
      color: theme.palette.error.light,
    },
    yellow: {
      color: theme.palette.warning.light,
    },
    quote: { fontStyle: "italic", padding: "0 24px", textAlign: "center" },
    select: {
      padding: 10,
      color: "white",
    },
    send: {
      background: theme.palette.success.main,
      color: "white",
      fontWeight: "bold",
      fontSize: 12,
    },
    services: {},
    text_field: {
      padding: 8,
    },
    widget: {
      maxWidth: 680,
      "& iframe:": {
        position: "absolute",
      },
    },
  });

interface Props {
  classes: any;
  isMobile?: boolean;
}

const Contact: React.FC<Props> = (props) => {
  const { classes } = props;
  //  const [messageType, setMessageType] = useState("general");
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <Grid
      classes={{ root: classes.inner }}
      spacing={4}
      container
      direction="column"
      style={{ margin: "0 auto", maxWidth: 960 }}
    >
      <Grid>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid item style={{ maxWidth: 500 }}>
        <div
          className={classNames(classes.widget, "calendly-inline-widget")}
          data-url={
            "https://calendly.com/samuel-s-maxime/15min?background_color=2d4951&text_color=ddcfb9&primary_color=ffffff"
          }
          style={{ height: 0, position: "relative", paddingTop: "125%" }}
        ></div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Contact);
