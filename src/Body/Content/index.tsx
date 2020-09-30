import React from "react";
import { Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import Home from "./home";
import Contact from "./contact";
import Schedule from "./schedule";
const styles = (theme: Theme) =>
  createStyles({
    box_header: { lineHeight: 1 },
    icon: {
      color: "rgba(45, 73, 81,.4)",
      fontSize: "2rem",
      marginBottom: -18,
    },
    icon_box: {
      marginRight: -24,
      marginTop: -24,
      textAlign: "right",
      width: "100%",
    },
    info_box: {
      background: "rgba(221, 207, 185, 0.5)",
      border: "3px solid white",
      boxShadow: "inset 6px 6px 14px rgba(45, 73, 81,1)",
      //  margin: 24,
      height: "100%",
    },
    info_content: {
      color: "white",
    },
    testimonial: {
      maxWidth: 450,
    },
  });
interface Props {
  classes: any;
  isMobile: boolean;
}
interface Info {
  title: string;
  icon: any;
  content?: any;
  small?: boolean;
  width: any;
}

const Content: React.FC<Props> = (props) => {
  const { isMobile } = props;

  return (
    <Switch>
      <Route path="/schedule">
        <Schedule isMobile={isMobile} />
      </Route>
      <Route path="/contact">
        <Contact isMobile={isMobile} />
      </Route>
      <Route path="/">
        <Home isMobile={isMobile} />
      </Route>
    </Switch>
  );
};

export default withStyles(styles)(Content);
